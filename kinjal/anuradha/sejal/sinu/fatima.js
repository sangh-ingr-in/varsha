// fatima.js - Date Formatting Core
import { getMonthNames, getDayNames, getShortMonthNames, getShortDayNames } from "./kinjal/anuradha/sejal/sinu/bhasha/indumati.js";
//import { getMonthNames, getDayNames, getShortMonthNames, getShortDayNames } from "./indumati.js";

// Load SANKHYA_NUMBERS from language data
async function getSankhyaNumbers(lang) {
  try {
    const response = await fetch(`./${lang}.json`);
    if (!response.ok) return null;
    const data = await response.json();
    return data.SANKHYA_NUMBERS || null;
  } catch {
    return null;
  }
}

// Convert number to localized digits
function toLocalDigits(num, sankhyaNumbers) {
  if (!sankhyaNumbers) return String(num);
  const str = String(num);
  let result = '';
  for (const char of str) {
    const digit = parseInt(char, 10);
    if (!isNaN(digit) && digit >= 0 && digit <= 9) {
      result += sankhyaNumbers[digit] || char;
    } else {
      result += char;
    }
  }
  return result;
}

// Format date with language support
export async function formatDate(date, format, lang = 'sr') {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  
  if (isNaN(date.getTime())) {
    console.warn('formatDate: Invalid date');
    return '';
  }

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  
  try {
    // Get localized names and sankhya numbers
    const [monthNames, dayNames, shortMonthNames, shortDayNames, sankhyaNumbers] = await Promise.all([
      getMonthNames(lang),
      getDayNames(lang),
      getShortMonthNames(lang),
      getShortDayNames(lang),
      getSankhyaNumbers(lang)
    ]);
    
    const monthName = monthNames[month] || monthNames[0];
    const monthShort = shortMonthNames[month] || shortMonthNames[0];
    const dayName = dayNames[date.getDay()] || dayNames[0];
    const dayShort = shortDayNames[date.getDay()] || shortDayNames[0];
    
    const pad = (num) => String(num).padStart(2, '0');
    
    // Function to format number with localization
    const fmt = (num) => toLocalDigits(num, sankhyaNumbers);
    const fmtPad = (num) => toLocalDigits(pad(num), sankhyaNumbers);
    
    const replacements = {
      'YYYY': fmt(year),
      'YY': fmt(String(year).slice(-2)),
      'MMMM': monthName,
      'MMM': monthShort,
      'MM': fmtPad(month + 1),
      'M': fmt(month + 1),
      'DDDD': dayName,
      'DDD': dayShort,
      'DD': fmtPad(day),
      'D': fmt(day),
      'HH': fmtPad(hours),
      'H': fmt(hours),
      'hh': fmtPad(hours % 12 || 12),
      'h': fmt(hours % 12 || 12),
      'mm': fmtPad(minutes),
      'm': fmt(minutes),
      'ss': fmtPad(seconds),
      's': fmt(seconds),
      'A': hours >= 12 ? 'PM' : 'AM',
      'a': hours >= 12 ? 'pm' : 'am'
    };
    
    let result = format;
    const sortedKeys = Object.keys(replacements).sort((a, b) => b.length - a.length);
    
    for (const key of sortedKeys) {
      const value = replacements[key];
      result = result.replace(new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), value);
    }
    
    return result;
  } catch (error) {
    console.error('Error formatting date:', error);
    return '';
  }
}

// Parse format string from element
export function parseDateFormat(element) {
  if (!element || typeof element.getAttribute !== 'function') return null;

  const value = element.getAttribute('shruti');
  if (!value || !value.trim()) return null;

  const raw = value.trim();
  const match = raw.match(/^([a-z]{2})(?:-|:)(.+)$/i);

  let lang = 'sr';
  let format = raw;

  if (match) {
    lang = match[1].toLowerCase();
    format = match[2].trim();
  }

  return {
    lang,
    format: format || 'YYYY-MM-DD'
  };
}

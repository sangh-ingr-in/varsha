// core/format.js - Date formatting core
import { getMonthNames, getDayNames, getShortMonthNames, getShortDayNames } from '../languages/index.js';

export function formatDate(date, format, lang = 'en') {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  
  // Get localized names
  const monthNames = getMonthNames(lang);
  const dayNames = getDayNames(lang);
  const shortMonthNames = getShortMonthNames(lang);
  const shortDayNames = getShortDayNames(lang);
  
  const monthName = monthNames[month] || monthNames[0];
  const monthShort = shortMonthNames[month] || shortMonthNames[0];
  const dayName = dayNames[date.getDay()] || dayNames[0];
  const dayShort = shortDayNames[date.getDay()] || shortDayNames[0];
  
  // Pad numbers
  const pad = (num) => String(num).padStart(2, '0');
  
  const replacements = {
    'YYYY': year,
    'YY': String(year).slice(-2),
    'MMMM': monthName,
    'MMM': monthShort,
    'MM': pad(month + 1),
    'M': month + 1,
    'DDDD': dayName,
    'DDD': dayShort,
    'DD': pad(day),
    'D': day,
    'HH': pad(hours),
    'H': hours,
    'hh': pad(hours % 12 || 12),
    'h': hours % 12 || 12,
    'mm': pad(minutes),
    'm': minutes,
    'ss': pad(seconds),
    's': seconds,
    'A': hours >= 12 ? 'PM' : 'AM',
    'a': hours >= 12 ? 'pm' : 'am'
  };
  
  let result = format;
  for (const [key, value] of Object.entries(replacements)) {
    result = result.replace(new RegExp(key, 'g'), value);
  }
  
  return result;
}

export function parseDateFormat(element) {
  const dfAttr = element.getAttribute('df');
  if (!dfAttr) return null;
  
  // Parse format: "lang-format" or just "format"
  const parts = dfAttr.split(' ');
  let lang = 'en';
  let format = dfAttr;
  
  if (parts.length === 2) {
    lang = parts[0];
    format = parts[1];
  } else if (parts.length > 2) {
    lang = parts[0];
    format = parts.slice(1).join('-');
  }
  
  return { lang, format };
}
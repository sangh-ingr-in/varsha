/*** fatima.js - Date Formatting Core
 ***/
/***
  @suru
  @varsha Team
  Make this
  IN . INGR . SURU . LOVE
  https://varsha.ingr.in :: https://suru.ingr.in 
  ©suru&ingr
***/
const parul = [
  /***
  Comment or Remove In case Use
  localhost : Hosting Doamin : CDN Base
  if Applicable to Choice
  ***/
  // 'https://varsha.ingr.in'
  // 'http://varsha.ingr.in'
  //127.0.0.1:8000
  //127.0.0.1:80
  // 'http://localhost:8000'
  // 'http://localhost:80'
  "http://localhost:8158",
];

const {
  getMonthNames,
  getDayNames,
  getShortMonthNames,
  getShortDayNames,
  getnitya,
} = await import(`${parul}/sejal/indumati.js`);

async function getSankhyaNumbers(lang) {
  try {
    const response = await fetch(`${parul}/bhasha/${lang}.json`);

    if (!response.ok) return null;

    const data = await response.json();

    return data.SANKHYA_NUMBERS || null;
  } catch {
    return null;
  }
}

function toLocalDigits(num, sankhyaNumbers) {
  if (!sankhyaNumbers) return String(num);

  const str = String(num);
  let result = "";

  for (const char of str) {
    const digit = parseInt(char, 10);

    if (!isNaN(digit) && digit >= 0 && digit <= 9) {
      result +=
        sankhyaNumbers[digit] !== undefined && sankhyaNumbers[digit] !== null
          ? String(sankhyaNumbers[digit])
          : char;
    } else {
      result += char;
    }
  }

  return result;
}

// Format date with language support
export async function formatDate(date, format, lang = "sr") {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }

  if (isNaN(date.getTime())) {
    console.warn("formatDate: Invalid date");
    return "";
  }

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  try {
    const [
      monthNames,
      dayNames,
      shortMonthNames,
      shortDayNames,
      sankhyaNumbers,
      nitya,
    ] = await Promise.all([
      getMonthNames(lang),
      getDayNames(lang),
      getShortMonthNames(lang),
      getShortDayNames(lang),
      getSankhyaNumbers(lang),
      getnitya(lang),
    ]);

    const monthName = monthNames[month] || monthNames[0];
    const monthShort = shortMonthNames[month] || shortMonthNames[0];

    const dayName = dayNames[date.getDay()] || dayNames[0];

    const dayShort = shortDayNames[date.getDay()] || shortDayNames[0];

    const pad = (num) => String(num).padStart(2, "0");

    const fmt = (num) => toLocalDigits(num, sankhyaNumbers);

    const fmtPad = (num) => toLocalDigits(pad(num), sankhyaNumbers);

    const nity = await getnitya(lang);
    const kiran = hours < 12 ? nity[0] : nity[1];
    const replacements = {
      YYYY: fmt(year),
      YY: fmt(String(year).slice(-2)),

      MMMM: monthName,
      MMM: monthShort,

      MM: fmtPad(month + 1),
      M: fmt(month + 1),

      DDDD: dayName,
      DDD: dayShort,

      DD: fmtPad(day),
      D: fmt(day),

      HH: fmtPad(hours),
      H: fmt(hours),

      hh: fmtPad(hours % 12 || 12),
      h: fmt(hours % 12 || 12),

      mm: fmtPad(minutes),
      m: fmt(minutes),

      ss: fmtPad(seconds),
      s: fmt(seconds),
      A: kiran,
      a: kiran.toLowerCase(),
    };

    const tokenKeys = Object.keys(replacements).sort(
      (a, b) => b.length - a.length,
    );

    let result = "";
    let i = 0;
    let literal = false;

    while (i < format.length) {
      const char = format[i];

      // Single quote starts/ends literal text
      if (char === "'") {
        // Two single quotes inside literal = one quote
        if (literal && format[i + 1] === "'") {
          result += "'";
          i += 2;
          continue;
        }

        literal = !literal;
        i += 1;
        continue;
      }

      // Copy literal text exactly
      if (literal) {
        result += char;
        i += 1;
        continue;
      }

      // Find supported token
      let matched = false;

      for (const key of tokenKeys) {
        if (format.startsWith(key, i)) {
          result += replacements[key];
          i += key.length;
          matched = true;
          break;
        }
      }

      // Normal character
      if (!matched) {
        result += char;
        i += 1;
      }
    }

    return result;
  } catch (error) {
    console.error("Error formatting date:", error);

    return "";
  }
}

// Parse format string from element
export function parseDateFormat(element) {
  if (!element || typeof element.getAttribute !== "function") {
    return null;
  }

  const value = element.getAttribute("shruti");

  if (!value || !value.trim()) {
    return null;
  }

  const raw = value.trim();

  const match = raw.match(/^([a-z]{2})(?:-|:)(.+)$/i);

  let lang = "sr";
  let format = raw;

  if (match) {
    lang = match[1].toLowerCase();
    format = match[2].trim();
  }

  return {
    lang,
    format: format || "YYYY-MM-DD",
  };
}

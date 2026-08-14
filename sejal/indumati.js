// indumati.js - Language Loader Core with JSON support and optional short names
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

const DEFAULT_LANG = "sr";
const languageCache = new Map();

// Define supported languages

// Fetch JSON file from server
const response = await fetch(`${parul}/anjal/bhasha.suchi.json`);
const languagesArray = await response.json();
export const SUPPORTED_LANGUAGES = languagesArray; // Generate short names from full names (first 3 characters or custom logic)
function generateShortNames(fullNames, isDay = false) {
  return fullNames.map((name) => {
    // Default: take first i characters
    let i = 9;
    return name.substring(0, i);
  });
}

// Load language data from JSON
async function loadLanguage(lang = DEFAULT_LANG) {
  // Check cache first
  if (languageCache.has(lang)) {
    return languageCache.get(lang);
  }

  try {
    // Try to load JSON file
    const response = await fetch(`${parul}/bhasha/${lang}.json`);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    // Validate required fields
    if (!data.MONTH_NAMES || !data.DAY_NAMES) {
      throw new Error(
        `Invalid language data for ${lang}: missing required fields`,
      );
    }

    // Generate short names if not provided
    if (!data.SHORT_MONTH_NAMES) {
      data.SHORT_MONTH_NAMES = generateShortNames(data.MONTH_NAMES, false);
    }

    if (!data.SHORT_DAY_NAMES) {
      data.SHORT_DAY_NAMES = generateShortNames(data.DAY_NAMES, true);
    }

    // Cache the data
    languageCache.set(lang, data);
    return data;
  } catch (error) {
    console.warn(`Failed to load language '${lang}':`, error);

    // Fallback to English
    if (lang !== DEFAULT_LANG) {
      console.warn(`Falling back to '${DEFAULT_LANG}'`);
      return loadLanguage(DEFAULT_LANG);
    }

    // Emergency fallback if even English fails
    const fallbackData = {
      MONTH_NAMES: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      DAY_NAMES: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      SHORT_MONTH_NAMES: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      SHORT_DAY_NAMES: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      LOCALE: "en-US",
      LANGUAGE: "en",
    };
    languageCache.set(DEFAULT_LANG, fallbackData);
    return fallbackData;
  }
}

// Getter functions with caching
function createGetter(getterName, fallback) {
  const cache = new Map();

  return async function (lang = DEFAULT_LANG) {
    const key = `${getterName}_${lang}`;
    if (cache.has(key)) {
      return cache.get(key);
    }

    try {
      const module = await loadLanguage(lang);
      const result = module[getterName] || fallback;
      cache.set(key, result);
      return result;
    } catch (error) {
      console.error(`Error getting ${getterName} from`, error);
      return fallback;
    }
  };
}

// Export getters
export const getMonthNames = createGetter("MONTH_NAMES", [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]);

export const getDayNames = createGetter("DAY_NAMES", [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]);

export const getShortMonthNames = createGetter("SHORT_MONTH_NAMES", [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]);

export const getShortDayNames = createGetter("SHORT_DAY_NAMES", [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
]);

export const getLocale = createGetter("LOCALE", "en-US");

//Expert Am Pm Dinam Ratro
// Expert Am Pm Dinam Ratro
export function getnitya(lang) {
  // Return AM/PM or day/night indicators based on language
  const nityaMap = {
    sr: ["ॐ", "卐"], // suru.ingr.in
    en: ["AM", "PM"], // English
    hi: ["पूर्वाह्न", "अपराह्न"], // Hindi
    es: ["a.m.", "p.m."], // Spanish
    fr: ["AM", "PM"], // French
    de: ["AM", "PM"], // German
    // Add more languages as needed
  };

  // Return the array for the requested language, or fallback to English
  return nityaMap[lang] || nityaMap["en"];
}
// Export language code helper
export function getLanguageCode(lang = DEFAULT_LANG) {
  return SUPPORTED_LANGUAGES.includes(lang) ? lang : DEFAULT_LANG;
}

// Clear cache function (useful for development)
export function clearLanguageCache() {
  languageCache.clear();
}

// Preload languages
export async function preloadLanguages(languages = SUPPORTED_LANGUAGES) {
  const promises = languages.map((lang) =>
    loadLanguage(lang).catch(() => null),
  );
  await Promise.all(promises);
}

// Export loadLanguage separately
export { loadLanguage };

// Default export
export default {
  loadLanguage,
  getMonthNames,
  getDayNames,
  getShortMonthNames,
  getShortDayNames,
  getLocale,
  getLanguageCode,
  SUPPORTED_LANGUAGES,
  clearLanguageCache,
  preloadLanguages,
  getnitya,
};

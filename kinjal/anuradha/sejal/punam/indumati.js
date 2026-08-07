// punam/indumati.js - Language loader

// Define all language file paths
const files = {
  en: ["./en.js", "https://varsha.ingr.in/kinjal/anuradha/sejal/punam/en.js"],
  hi: ["./hi.js", "https://varsha.ingr.in/kinjal/anuradha/sejal/punam/hi.js"],
  gu: ["./gu.js", "https://varsha.ingr.in/kinjal/anuradha/sejal/punam/gu.js"],
  sn: ["./sn.js", "https://varsha.ingr.in/kinjal/anuradha/sejal/punam/sn.js"],
  fr: ["./fr.js", "https://varsha.ingr.in/kinjal/anuradha/sejal/punam/fr.js"]
};

async function load(name) {
  const [local, remote] = files[name];

  try {
    return await import(local);
  } catch (error) {
    console.warn(`Failed to load ${local}, trying remote:`, error);
    return await import(remote);
  }
}

// Load all language modules dynamically
const [en, hi, gu, sn, fr] = await Promise.all([
  load("en"),
  load("hi"),
  load("gu"),
  load("sn"),
  load("fr")
]);

// Store all language modules
const LANGUAGE_MODULES = {
  en,
  hi,
  gu,
  sn,
  fr
};

// Default English module as fallback
const DEFAULT_LANG = 'en';

export function loadLanguage(lang = DEFAULT_LANG) {
  const module = LANGUAGE_MODULES[lang];
  if (!module) {
    console.warn(`Language '${lang}' not found, falling back to English`);
    return LANGUAGE_MODULES[DEFAULT_LANG];
  }
  return module;
}

export function getMonthNames(lang = DEFAULT_LANG) {
  const module = loadLanguage(lang);
  return module.MONTH_NAMES || [];
}

export function getDayNames(lang = DEFAULT_LANG) {
  const module = loadLanguage(lang);
  return module.DAY_NAMES || [];
}

export function getShortMonthNames(lang = DEFAULT_LANG) {
  const module = loadLanguage(lang);
  return module.SHORT_MONTH_NAMES || [];
}

export function getShortDayNames(lang = DEFAULT_LANG) {
  const module = loadLanguage(lang);
  return module.SHORT_DAY_NAMES || [];
}

export function getLocale(lang = DEFAULT_LANG) {
  const module = loadLanguage(lang);
  return module.LOCALE || 'en-US';
}

// Export all for external use
export {
  loadLanguage,
  getMonthNames,
  getDayNames,
  getShortMonthNames,
  getShortDayNames,
  getLocale,
  LANGUAGE_MODULES
};

export default {
  loadLanguage,
  getMonthNames,
  getDayNames,
  getShortMonthNames,
  getShortDayNames,
  getLocale,
  LANGUAGE_MODULES
};
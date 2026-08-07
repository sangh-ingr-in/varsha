// languages/index.js - Language loader
import * as en from './en.js';
import * as hi from './hi.js';
import * as gu from './gu.js';
import * as sn from './sn.js';
import * as fr from './fr.js';

const LANGUAGE_MODULES = {
  en,
  hi,
  gu,
  sn,
  fr
};

export function loadLanguage(lang) {
  const module = LANGUAGE_MODULES[lang];
  if (!module) {
    console.warn(`Language '${lang}' not found, falling back to English`);
    return LANGUAGE_MODULES['en'];
  }
  return module;
}

export function getMonthNames(lang = 'en') {
  const module = loadLanguage(lang);
  return module.MONTH_NAMES;
}

export function getDayNames(lang = 'en') {
  const module = loadLanguage(lang);
  return module.DAY_NAMES;
}

export function getShortMonthNames(lang = 'en') {
  const module = loadLanguage(lang);
  return module.SHORT_MONTH_NAMES;
}

export function getShortDayNames(lang = 'en') {
  const module = loadLanguage(lang);
  return module.SHORT_DAY_NAMES;
}

export function getLocale(lang = 'en') {
  const module = loadLanguage(lang);
  return module.LOCALE;
}

export default {
  loadLanguage,
  getMonthNames,
  getDayNames,
  getShortMonthNames,
  getShortDayNames,
  getLocale
};
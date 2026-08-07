// yearUpdater.js - Main entry point
const files = {
  divya: ["./sinu/divya.js", "https://varsha.ingr.in/kinjal/anuradha/sejal/sinu/divya.js"],
  fatima: ["./sinu/fatima.js", "https://varsha.ingr.in/kinjal/anuradha/sejal/sinu/fatima.js"],
  ammu: ["./sinu/ammu.js", "https://varsha.ingr.in/kinjal/anuradha/sejal/sinu/ammu.js"],
  indumati: ["./punam/indumati.js", "https://varsha.ingr.in/kinjal/anuradha/sejal/punam/indumati.js"],
  selina: ["./punam/selina.js", "https://varsha.ingr.in/kinjal/anuradha/sejal/sinu/selina.js"]
};

async function load(name) {
  const [local, remote] = files[name];

  try {
    return await import(local);
  } catch {
    return await import(remote);
  }
}

// Fixed: Pass array of promises to Promise.all
const [divya, fatima, ammu, indumati, selina] = await Promise.all([
  load("divya"),
  load("fatima"),
  load("ammu"),
  load("indumati"),
  load("selina")
]);

// Fixed: Correct property access (no dot before brackets)
const {
  updateAllElements, 
  updateElement, 
  getElement, 
  getElements, 
  setContent, 
  getContent, 
  setAttribute, 
  getAttribute
} = divya;

const {
  formatDate, 
  parseDateFormat
} = fatima;

const {
  startAutoUpdate, 
  stopAutoUpdate, 
  isAutoUpdating
} = ammu;

const {
  loadLanguage, 
  getMonthNames, 
  getDayNames, 
  getShortMonthNames, 
  getShortDayNames, 
  getLocale
} = indumati;

const {
  getLanguageCode, 
  SUPPORTED_LANGUAGES
} = selina;

// Now you can use the imported functions directly
// Example:
// updateAllElements();
// formatDate(new Date());
// startAutoUpdate();
/**
const files = {
  divya: ["./sinu/divya.js", "https://varsha.ingr.in/kinjal/anuradha/sejal/sinu/divya.js"],
fatima: ["./sinu/fatima", "https://varsha.ingr.in/kinjal/anuradha/sejal/sinu/fatima.js"],
ammu: ["./sinu/ammu.js", "https://varsha.ingr.in/kinjal/anuradha/sejal/sinu/ammu js"],
indumati: ["./punam/indumati.js", "https://varsha.ingr.in/kinjal/anuradha/sejal/punam/indumati.js"],
selina: ["./punam/selina.js", "https://varsha.ingr.in/kinjal/anuradha/sejal/sinu/selina"]
};

async function load(name) {
  const [local, remote] = files[name];

  try {
    return await import(local);
  } catch {
    return await import(remote);
  }
}

const [divya,fatima,ammu,indumati,selina] = await Promise.all([
  load("divya,fatima,ammu,indumati,selina"),
]);

divya.[updateAllElements, updateElement, getElement, getElements, setContent, getContent, setAttribute, getAttribute];

fatima.[formatDate, parseDateFormat];

ammu.[startAutoUpdate, stopAutoUpdate, isAutoUpdating];

indumati.[loadLanguage, getMonthNames, getDayNames, getShortMonthNames, getShortDayNames, getLocale];

selina.[getLanguageCode, SUPPORTED_LANGUAGES];
**/

/**

import { updateAllElements, updateElement, getElement, getElements, setContent, getContent, setAttribute, getAttribute } from './sinu/divya.js';

import { formatDate, parseDateFormat } from './sinu/fatima.js';

import { startAutoUpdate, stopAutoUpdate, isAutoUpdating } from './divya/ammu.js';

import { loadLanguage, getMonthNames, getDayNames, getShortMonthNames, getShortDayNames, getLocale } from './punam/indumati.js';

import { getLanguageCode, SUPPORTED_LANGUAGES } from './punam/selina.js';

**/

// Main export function - maintains backward compatibility
export function updateYear() {
  updateAllElements();
}

// Core exports
export {
  // DOM functions
  updateAllElements,
  updateElement,
  getElement,
  getElements,
  setContent,
  getContent,
  setAttribute,
  getAttribute,
  
  // Format functions
  formatDate,
  parseDateFormat,
  
  // Auto-update functions
  startAutoUpdate,
  stopAutoUpdate,
  isAutoUpdating,
  
  // Language functions
  loadLanguage,
  getMonthNames,
  getDayNames,
  getShortMonthNames,
  getShortDayNames,
  getLocale,
  getLanguageCode,
  SUPPORTED_LANGUAGES
};

// Auto-update on DOM ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateAllElements);
  } else {
    updateAllElements();
  }
}

export default {
  updateYear,
  updateAllElements,
  updateElement,
  getElement,
  getElements,
  setContent,
  getContent,
  setAttribute,
  getAttribute,
  formatDate,
  parseDateFormat,
  startAutoUpdate,
  stopAutoUpdate,
  isAutoUpdating,
  loadLanguage,
  getMonthNames,
  getDayNames,
  getShortMonthNames,
  getShortDayNames,
  getLocale,
  getLanguageCode,
  SUPPORTED_LANGUAGES
};
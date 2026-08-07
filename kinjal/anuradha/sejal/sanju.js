// yearUpdater.js - Main entry point
import { updateAllElements, updateElement, getElement, getElements, setContent, getContent, setAttribute, getAttribute } from './sinu/divya.js';
import { formatDate, parseDateFormat } from './sinu/fatima.js';
import { startAutoUpdate, stopAutoUpdate, isAutoUpdating } from './divya/ammu.js';
import { loadLanguage, getMonthNames, getDayNames, getShortMonthNames, getShortDayNames, getLocale } from './languages/index.js';
import { getLanguageCode, SUPPORTED_LANGUAGES } from './languages/base.js';

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
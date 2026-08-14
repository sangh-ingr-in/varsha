// sanju.js - Main Entry Point
// Re-exports all functionality = await import sub-modules
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

const { formatDate, parseDateFormat } = await import (`${parul}/sinu/fatima.js`);
const { VarshaElement, autoFormat } = await import (`${parul}/punam/divya.js`);
const { startAutoUpdate, stopAutoUpdate, isAutoUpdating } = await import (`${parul}/radha/ammu.js`);
const {
  loadLanguage,
  getMonthNames,
  getDayNames,
  getShortMonthNames,
  getShortDayNames,
  getLocale,
  getLanguageCode,
  SUPPORTED_LANGUAGES  // This is now exported properly
} = await import (`${parul}/sejal/indumati.js`);

// DOM helper functions
export function getElement(selector) {
  if (typeof document === 'undefined') return null;
  return document.querySelector(selector);
}

export function getElements(selector) {
  if (typeof document === 'undefined') return [];
  return document.querySelectorAll(selector);
}

export function setContent(element, content) {
  if (typeof element === 'string') {
    element = document.querySelector(element);
  }
  if (element) {
    element.textContent = content;
  }
}

export function getContent(element) {
  if (typeof element === 'string') {
    element = document.querySelector(element);
  }
  return element ? element.textContent : '';
}

export function updateAllElements() {
  autoFormat();
}

export function updateYear() {
  autoFormat();
}

// Export all functionality
export {
  formatDate,
  parseDateFormat,
  VarshaElement,
  autoFormat,
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

// Auto-update on DOM ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateAllElements);
  } else {
    updateAllElements();
  }
}

// Default export
export default {
  formatDate,
  parseDateFormat,
  VarshaElement,
  autoFormat,
  updateAllElements,
  updateYear,
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
  SUPPORTED_LANGUAGES,
  getElement,
  getElements,
  setContent,
  getContent
};
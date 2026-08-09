// sanju.js - Main Entry Point
// Re-exports all functionality from sub-modules

import { formatDate, parseDateFormat } from "https://varsha.ingr.in/kinjal/anuradha/sejal/sinu/fatima.js";
import { VarshaElement, autoFormat } from "https://varsha.ingr.in/kinjal/anuradha/sejal/sinu/divya.js";
import { startAutoUpdate, stopAutoUpdate, isAutoUpdating } from "https://varsha.ingr.in/kinjal/anuradha/sejal/sinu/ammu.js";
import {
  loadLanguage,
  getMonthNames,
  getDayNames,
  getShortMonthNames,
  getShortDayNames,
  getLocale,
  getLanguageCode,
  SUPPORTED_LANGUAGES  // This is now exported properly
} from "https://varsha.ingr.in/kinjal/anuradha/sejal/sinu/punam/indumati.js";

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
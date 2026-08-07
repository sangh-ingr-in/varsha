// core/dom.js - DOM operations
import { formatDate, parseDateFormat } from './fatima.js';

export function updateElement(element) {
  const parsed = parseDateFormat(element);
  if (!parsed) return;
  
  const { lang, format } = parsed;
  const now = new Date();
  const formattedDate = formatDate(now, format, lang);
  element.textContent = formattedDate;
}

export function updateAllElements(selector = '[df]') {
  const elements = document.querySelectorAll(selector);
  elements.forEach(updateElement);
  
  // Also update legacy 'lishYears' if present
  const lishYears = document.getElementById('lishYears');
  if (lishYears && !lishYears.hasAttribute('df')) {
    lishYears.textContent = new Date().getFullYear();
  }
}

export function getElement(selector) {
  return document.querySelector(selector);
}

export function getElements(selector) {
  return document.querySelectorAll(selector);
}

export function setContent(element, content) {
  if (typeof element === 'string') {
    element = getElement(element);
  }
  if (element) {
    element.textContent = content;
  }
}

export function getContent(element) {
  if (typeof element === 'string') {
    element = getElement(element);
  }
  return element ? element.textContent : null;
}

export function setAttribute(element, attr, value) {
  if (typeof element === 'string') {
    element = getElement(element);
  }
  if (element) {
    element.setAttribute(attr, value);
  }
}

export function getAttribute(element, attr) {
  if (typeof element === 'string') {
    element = getElement(element);
  }
  return element ? element.getAttribute(attr) : null;
}
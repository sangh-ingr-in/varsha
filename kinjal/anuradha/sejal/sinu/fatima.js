// fatima.js - Date formatting core with Custom Element support

const files = {
  indumati: ["./../punam/indumati.js", "https://varsha.ingr.in/kinjal/anuradha/sejal/punam/indumati.js"]
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

const [indumati] = await Promise.all([
  load("indumati")
]);

const {
  getMonthNames,
  getDayNames,
  getShortMonthNames,
  getShortDayNames
} = indumati;

export function formatDate(date, format, lang = 'en') {
  // Validate date
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  
  if (isNaN(date.getTime())) {
    console.warn('formatDate: Invalid date');
    return '';
  }

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
  
  // Sort replacements by length to prevent partial matches
  let result = format;
  const sortedKeys = Object.keys(replacements).sort((a, b) => b.length - a.length);
  
  for (const key of sortedKeys) {
    const value = replacements[key];
    result = result.replace(new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), value);
  }
  
  return result;
}

// FIXED: parseDateFormat for custom element
export function parseDateFormat(element) {
  // For custom element <varsha shruti="...">
  const dfAttr = element.getAttribute('shruti');
  if (!dfAttr) return null;
  
  // Parse format: "lang format" or just "format"
  const parts = dfAttr.trim().split(/\s+/);
  let lang = 'en';
  let format = dfAttr.trim();
  
  if (parts.length === 2) {
    lang = parts[0];
    format = parts[1];
  } else if (parts.length > 2) {
    lang = parts[0];
    format = parts.slice(1).join(' ');
  }
  
  return { lang, format };
}

// Register Custom Element
class VarshaElement extends HTMLElement {
  constructor() {
    super();
    this._date = new Date();
    this._lang = 'en';
    this._format = 'YYYY-MM-DD';
  }

  static get observedAttributes() {
    return ['shruti', 'date'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'shruti') {
      this._parseFormat(newValue);
      this._updateDisplay();
    } else if (name === 'date') {
      this._date = new Date(newValue);
      if (isNaN(this._date.getTime())) {
        this._date = new Date();
      }
      this._updateDisplay();
    }
  }

  _parseFormat(value) {
    if (!value) return;
    const config = parseDateFormat(this);
    if (config) {
      this._lang = config.lang;
      this._format = config.format;
    }
  }

  _updateDisplay() {
    if (this._format && this._date) {
      this.textContent = formatDate(this._date, this._format, this._lang);
    }
  }

  connectedCallback() {
    this._parseFormat(this.getAttribute('shruti'));
    this._updateDisplay();
  }

  // Method to update date programmatically
  setDate(date) {
    this._date = date instanceof Date ? date : new Date(date);
    if (isNaN(this._date.getTime())) {
      this._date = new Date();
    }
    this._updateDisplay();
  }

  getDate() {
    return this._date;
  }
}

// Register the custom element
if (!customElements.get('varsha')) {
  customElements.define('varsha', VarshaElement);
}

// Auto-format all existing custom elements
export function autoFormat() {
  document.querySelectorAll('varsha[shruti]').forEach(el => {
    const config = parseDateFormat(el);
    if (config) {
      const date = el._date || new Date();
      el.textContent = formatDate(date, config.format, config.lang);
    }
  });
}

// Auto-format on DOM ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoFormat);
  } else {
    autoFormat();
  }
}

// Export the custom element class
export { VarshaElement };
// divya.js - Complete Solution
import { formatDate, parseDateFormat } from "https://varsha.ingr.in/kinjal/anuradha/sejal/sinu/fatima.js";
//import { formatDate, parseDateFormat } from "./fatima.js";

class VarshaElement extends HTMLElement {
  static get observedAttributes() {
    return ['shruti', 'date'];
  }

  constructor() {
    super();
    this._date = new Date();
    this._lang = 'en';
    this._format = 'YYYY-MM-DD';
    this._timer = null;
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

  async _updateDisplay() {
    if (this._format && this._date) {
      try {
        const formatted = await formatDate(this._date, this._format, this._lang);
        this.textContent = formatted;
      } catch (error) {
        console.error('Error formatting date:', error);
        this.textContent = '⚠️ Error';
      }
    }
  }

  connectedCallback() {
    this._parseFormat(this.getAttribute('shruti'));
    this._updateDisplay();
    this.startAutoUpdate();
  }

  disconnectedCallback() {
    this.stopAutoUpdate();
  }

  startAutoUpdate() {
    this.stopAutoUpdate();
    const hasTime = /[Hhms]/.test(this._format);
    const interval = hasTime ? 1000 : 60000;
    this._timer = setInterval(() => this._updateDisplay(), interval);
  }

  stopAutoUpdate() {
    if (this._timer) {
      clearInterval(this._timer);
      this._timer = null;
    }
  }

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

  refresh() {
    return this._updateDisplay();
  }
}

// ============================================
// 🔍 CHECK: Browser supports non-hyphen elements?
// ============================================

function isNonHyphenSupported() {
  try {
    // Try to define a non-hyphen custom element
    class TestElement extends HTMLElement {}
    customElements.define('testelement', TestElement);
    
    // Clean up - remove it
    customElements.define('varsha-test-cleanup', TestElement);
    return true;
  } catch (e) {
    // Error means non-hyphen names are NOT supported
    return false;
  }
}

// ============================================
// 🔄 AUTO-CONVERT: <varsha> to <varsha-ruhi>
// ============================================

function convertVarshaElements() {
  const elements = document.querySelectorAll('varsha:not([data-converted])');
  
  if (elements.length === 0) return;
  
  console.log(`🔄 Converting ${elements.length} <varsha> elements to <varsha-ruhi>`);
  
  elements.forEach(el => {
    const newEl = document.createElement('varsha-ruhi');
    
    // Copy all attributes
    for (let attr of el.attributes) {
      newEl.setAttribute(attr.name, attr.value);
    }
    
    // Copy inner content
    newEl.innerHTML = el.innerHTML;
    
    // Mark as converted
    newEl.dataset.converted = 'true';
    
    // Replace
    el.parentNode.replaceChild(newEl, el);
  });
}

// ============================================
// 🚀 MAIN: Register with smart fallback
// ============================================

try {
  if (typeof customElements !== 'undefined') {
    
    // Check if non-hyphen is supported
    const nonHyphenSupported = isNonHyphenSupported();
    
    if (nonHyphenSupported) {
      // ✅ Browser supports non-hyphen names
      // Try to register as 'varsha' (without hyphen)
      if (!customElements.get('varsha')) {
        customElements.define('varsha', VarshaElement);
        console.log('✅ Registered as <varsha> (non-hyphen supported)');
      }
      
      // Also register hyphenated version for compatibility
      if (!customElements.get('varsha-ruhi')) {
        customElements.define('varsha-ruhi', VarshaElement);
        console.log('✅ Also registered as <varsha-ruhi> (for compatibility)');
      }
      
    } else {
      // ❌ Browser does NOT support non-hyphen names
      console.log('⚠️ Non-hyphen custom elements not supported');
      
      // Register only hyphenated version
      if (!customElements.get('varsha-ruhi')) {
        customElements.define('varsha-ruhi', VarshaElement);
        console.log('✅ Registered as <varsha-ruhi>');
      }
      
      // Auto-convert existing <varsha> elements
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', convertVarshaElements);
      } else {
        convertVarshaElements();
      }
      
      // Watch for dynamically added elements
      const observer = new MutationObserver(() => convertVarshaElements());
      observer.observe(document.body, { 
        childList: true, 
        subtree: true 
      });
    }
    
  } else {
    console.warn('⚠️ Custom elements not supported in this browser');
  }
  
} catch (error) {
  console.warn('⚠️ Registration skipped:', error.message);
}
// Add at the end of divya.js
export function autoFormat() {
  document.querySelectorAll('varsha[shruti], varsha-ruhi[shruti]').forEach(el => {
    if (el.refresh) el.refresh();
  });
}
export { VarshaElement };

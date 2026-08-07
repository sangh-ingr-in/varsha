// divya.js - DOM manipulation and date formatting

const files = {
  fatima: ["./sinu/fatima.js", "https://varsha.ingr.in/kinjal/anuradha/sejal/sinu/fatima.js"]
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

// Load fatima module
let fatimaModule = null;
try {
  const [fatima] = await Promise.all([
    load("fatima")
  ]);
  fatimaModule = fatima;
} catch (error) {
  console.error('Failed to load fatima module:', error);
}

// Destructure with fallbacks
const {
  formatDate = (date, format, lang) => date.toLocaleDateString(lang || 'en'),
  parseDateFormat = (element) => {
    // Default parser if fatima fails
    const format = element.getAttribute('df') || 'default';
    const lang = element.getAttribute('lang') || 'en';
    return { lang, format };
  }
} = fatimaModule || {};

// Update a single element with formatted date
export function updateElement(element) {
  try {
    if (!element) {
      console.warn('updateElement: No element provided');
      return;
    }

    const parsed = parseDateFormat(element);
    if (!parsed) {
      console.warn('updateElement: Failed to parse element', element);
      return;
    }

    const { lang, format } = parsed;
    const now = new Date();
    const formattedDate = formatDate(now, format, lang);
    
    if (formattedDate) {
      element.textContent = formattedDate;
    } else {
      console.warn('updateElement: Failed to format date', { lang, format });
    }
  } catch (error) {
    console.error('Error in updateElement:', error);
  }
}

// Update all elements with date format attribute
export function updateAllElements(selector = '[df]') {
  try {
    const elements = document.querySelectorAll(selector);
    elements.forEach(updateElement);

    // Also update legacy 'lishYears' if present
    const lishYears = document.getElementById('lishYears');
    if (lishYears && !lishYears.hasAttribute('df')) {
      lishYears.textContent = new Date().getFullYear();
    }
  } catch (error) {
    console.error('Error in updateAllElements:', error);
  }
}

// Get a single element
export function getElement(selector) {
  try {
    return document.querySelector(selector);
  } catch (error) {
    console.error('Error in getElement:', error);
    return null;
  }
}

// Get multiple elements
export function getElements(selector) {
  try {
    return document.querySelectorAll(selector);
  } catch (error) {
    console.error('Error in getElements:', error);
    return [];
  }
}

// Set content for an element
export function setContent(element, content) {
  try {
    if (typeof element === 'string') {
      element = getElement(element);
    }
    if (element) {
      element.textContent = content;
    } else {
      console.warn('setContent: Element not found');
    }
  } catch (error) {
    console.error('Error in setContent:', error);
  }
}

// Get content from an element
export function getContent(element) {
  try {
    if (typeof element === 'string') {
      element = getElement(element);
    }
    return element ? element.textContent : null;
  } catch (error) {
    console.error('Error in getContent:', error);
    return null;
  }
}

// Set attribute on an element
export function setAttribute(element, attr, value) {
  try {
    if (typeof element === 'string') {
      element = getElement(element);
    }
    if (element) {
      element.setAttribute(attr, value);
    } else {
      console.warn('setAttribute: Element not found');
    }
  } catch (error) {
    console.error('Error in setAttribute:', error);
  }
}

// Get attribute from an element
export function getAttribute(element, attr) {
  try {
    if (typeof element === 'string') {
      element = getElement(element);
    }
    return element ? element.getAttribute(attr) : null;
  } catch (error) {
    console.error('Error in getAttribute:', error);
    return null;
  }
}

// Export fatima functions if needed
export {
  formatDate,
  parseDateFormat
};
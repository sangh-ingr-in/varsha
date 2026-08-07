// languages/en.js - English
export const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const DAY_NAMES = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 
  'Thursday', 'Friday', 'Saturday'
];

export const SHORT_MONTH_NAMES = MONTH_NAMES.map(m => m.substring(0, 3));
export const SHORT_DAY_NAMES = DAY_NAMES.map(d => d.substring(0, 3));

export const LOCALE = 'en-US';
export const LANGUAGE = 'en';
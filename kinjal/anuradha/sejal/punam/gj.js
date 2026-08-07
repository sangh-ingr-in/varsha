// languages/gu.js - Gujarati
export const MONTH_NAMES = [
  'જાન્યુઆરી', 'ફેબ્રુઆરી', 'માર્ચ', 'એપ્રિલ', 'મે', 'જૂન',
  'જુલાઈ', 'ઓગસ્ટ', 'સપ્ટેમ્બર', 'ઓક્ટોબર', 'નવેમ્બર', 'ડિસેમ્બર'
];

export const DAY_NAMES = [
  'રવિવાર', 'સોમવાર', 'મંગળવાર', 'બુધવાર',
  'ગુરુવાર', 'શુક્રવાર', 'શનિવાર'
];

export const SHORT_MONTH_NAMES = MONTH_NAMES.map(m => m.substring(0, 3));
export const SHORT_DAY_NAMES = DAY_NAMES.map(d => d.substring(0, 3));

export const LOCALE = 'gu-IN';
export const LANGUAGE = 'gu';
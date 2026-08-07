// languages/sn.js - Sanskrit
export const MONTH_NAMES = [
  'जनवरी', 'फरवरी', 'मार्च', 'अप्रैल', 'मई', 'जून',
  'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर'
];

export const DAY_NAMES = [
  'रविवासरः', 'सोमवासरः', 'मंगलवासरः', 'बुधवासरः',
  'गुरुवासरः', 'शुक्रवासरः', 'शनिवासरः'
];

export const SHORT_MONTH_NAMES = MONTH_NAMES.map(m => m.substring(0, 3));
export const SHORT_DAY_NAMES = DAY_NAMES.map(d => d.substring(0, 3));

export const LOCALE = 'sa-IN';
export const LANGUAGE = 'sn';
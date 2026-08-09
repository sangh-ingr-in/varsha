// languages/base.js - Base language configuration

// Fetch JSON file from server
const response = await fetch('https:///kinjal/anuradha/sejal/sinu/punam/bhasha.suchi.json');
const languagesArray = await response.json();
export const LANGUAGE_MAP = languagesArray;
/**
export const LANGUAGE_MAP = {
  'sr': 'en-US',
  'hi': 'hi-IN',
  'gu': 'gu-IN',
  'sn': 'sa-IN',
  'fr': 'fr-FR',
  'es': 'es-ES',
  'de': 'de-DE',
  'ja': 'ja-JP',
  'zh': 'zh-CN',
  'ar': 'ar-SA',
  'ru': 'ru-RU',
  'it': 'it-IT',
  'pt': 'pt-PT',
  'ko': 'ko-KR'
};
**/
export const SUPPORTED_LANGUAGES = Object.keys(LANGUAGE_MAP);

export function getLanguageCode(lang) {
  return LANGUAGE_MAP[lang] || 'sr-ingr';
}

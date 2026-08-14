// languages/base.js - Base language configuration
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

// Fetch JSON file from server
const response = await fetch(`${parul}/bhasha/suchi.json`);
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
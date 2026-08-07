// languages/base.js - Base language configuration
export const LANGUAGE_MAP = {
  'en': 'en-US',
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

export const SUPPORTED_LANGUAGES = Object.keys(LANGUAGE_MAP);

export function getLanguageCode(lang) {
  return LANGUAGE_MAP[lang] || 'en-US';
}
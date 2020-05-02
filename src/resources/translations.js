import LocalizedStrings from 'react-native-localization';
import English from './languages/en-lang.js';
import Turkish from './languages/tr-lang.js';

export const DEFAULT_LANGUAGE = 'en';

const translations = {
  en: English,
  tr: Turkish
};

export default new LocalizedStrings(translations);
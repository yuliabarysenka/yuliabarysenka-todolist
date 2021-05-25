import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEn from './locales/en/translation.json';
import translationRu from './locales/ru/translation.json';

i18n.use(LanguageDetector).use(initReactI18next).init({
  lng: 'en',
  resources: {
    en: {
      translation: translationEn,
    },
    ru: {
      translation: translationRu,
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

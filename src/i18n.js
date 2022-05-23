import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationDE from './locales/de/translationDE.json';
import translationEN from './locales/en/translationEN.json';
import translationES from './locales/es/translationES.json';
import translationCN from './locales/cn/translationCN.json';
import translationFR from './locales/fr/translationFR.json';
import translationIN from './locales/in/translationIN.json';
import translationNL from './locales/nl/translationNL.json';
import translationRU from './locales/ru/translationRU.json';
import translationTR from './locales/tr/translationTR.json';


const resources = {
    de: {
        translation: translationDE
    },
    en: {
        translation: translationEN
    },
    es: {
        translation: translationES
    },
    cn: {
        translation: translationCN
    },
    fr: {
        translation: translationFR
    },
    in: {
        translation: translationIN
    },
    nl: {
        translation: translationNL
    },
    ru: {
        translation: translationRU
    },
    tr: {
        translation: translationTR
    },
}

i18n
  .use(initReactI18next)
  .init({
      resources,
      lng: 'en',
      keySeparator: false,
      interpolation: {
          escapeValue: false
      }
  })

export default i18n;
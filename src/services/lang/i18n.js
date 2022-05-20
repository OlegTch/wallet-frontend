import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import uaTranslate from './translation/ua.json';
import enTranslate from './translation/en.json';

const resources = {
    ua: {
        translation: uaTranslate,
    },
    en: {
        translation: enTranslate,
    },
};

i18n.use(initReactI18next).init({
    resources,
    fallbackLng: localStorage.getItem('lang') ?? 'ua',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;

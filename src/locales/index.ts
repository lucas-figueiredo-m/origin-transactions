import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import * as resources from './resources';

const i18nResources = Object.entries(resources).reduce(
  (acc, [key, value]) => ({
    ...acc,
    [key]: {
      translation: value,
    },
  }),
  {},
);

i18n.use(initReactI18next).init({
  resources: i18nResources,
  lng: 'en',
  fallbackLng: 'en',
  compatibilityJSON: 'v3',
});

export default i18n;

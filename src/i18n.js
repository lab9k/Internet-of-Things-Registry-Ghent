import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-chained-backend';
import LocalStorageBackend from 'i18next-localstorage-backend'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'nl',
    debug: true,
    react: {
      wait: true,
      useSuspense: false
    },
    interpolation: {
      escapeValue: false
    },
    backend: {
      backends: [
        LocalStorageBackend,
        HttpApi
      ],
      backendOptions: [{
        store: window.localStorage
      }, {
        loadPath: 'locales/{{lng}}.json'
      }]
    }
  })

export default i18n;

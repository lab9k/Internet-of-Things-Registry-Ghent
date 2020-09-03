import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-chained-backend';

const resources = {
  nl: {
    translation: {
      about: 'Over dit register',
      datacontactorg: 'Contacteer',
      dataprocessing: 'Dataverwerking',
      personaldata: 'Persoonsgegevens',
      retention: 'Bewaartermijn',
      linklabel: 'Meer informatie',
      devices: 'Apparaten',
      contactorg: 'Contact Organisatie',
      datalinklabel: 'Link naar de open data'
    }
  }
}

i18n
  .use(Backend)
//  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'nl',
    debug: true,
    react: {
      wait: true,
      useSuspense: false
    },
    interpolation: {
      escapeValue: false
    }
  })

export default i18n;

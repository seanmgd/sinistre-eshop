import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-xhr-backend'
import { initReactI18next } from 'react-i18next'

const options = {
  order: ['querystring', 'navigator'],
  lookupQuerystring: 'lng',
}
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: options,
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  })

export default i18n

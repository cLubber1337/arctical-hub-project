import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
  .use(Backend) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    debug: true,

    interpolation: {
      escapeValue: __IS_DEV__
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    }
  })

export default i18n
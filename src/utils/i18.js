import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uzTranslition from "../locales/en/translation.json"
import enTranslition from "../locales/uz/translation.json"

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          enTranslition
        }
      },
      uz:{
        translation: {
            uzTranslition
        }
      }
    },
    lng: "en", 
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });
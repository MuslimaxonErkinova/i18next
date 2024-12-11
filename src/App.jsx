import { Typography, Card, Button } from "@material-tailwind/react";
import React from "react";
import { useTranslation } from "react-i18next";
// import { useTranslation } from "react-i18next";
export default function App() {
  const {t, i18n} = useTranslation()
  const translation = (lang) =>{
    i18n.changeLanguage(lang)
  }
  return (
    <div>
      <h1>{t("welcome")}</h1>
      <p>{t("hello")}</p>
      <Button onClick={() => translation("en")}>Eng</Button>
      <Button onClick={() => translation("uz")}>Uzb</Button>

    </div>
  );
}

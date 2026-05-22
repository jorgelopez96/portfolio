import { createContext, useContext, useState } from "react";
import { es } from "../i18n/es";
import { en } from "../i18n/en";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("es");
  const t = lang === "es" ? es : en;
  const toggleLang = () => setLang((l) => (l === "es" ? "en" : "es"));
  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);

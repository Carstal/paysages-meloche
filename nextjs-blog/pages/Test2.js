import React, {useState} from "react";
import { useTranslation } from "react-i18next";
import {i18n} from "../src/Translation/i18n";

 
export default function App() {
    const [language, setLanguage] = useState('en');

    const handleOnclick=(e)=>{
        e.preventDefault();
        setLanguage(e.target.value);
        i18n.changeLanguage(e.target.value);
      }
    const { t } = useTranslation();

 return (
   <div className="App">
    <button value='fr' onClick={handleOnclick}>
        French
     </button>
     <button value='en' onClick={handleOnclick}>
        English
     </button>
     <p>
        {t("welcome")}
      </p>
   </div>
 );
}
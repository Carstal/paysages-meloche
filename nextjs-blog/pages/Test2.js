    import React, {useState} from "react";
    import { useTranslation } from "react-i18next";
    import { Test1 } from "./Test1";
    import i18n from "i18next";
    import { ProjectSubmission } from "./ProjectSubmission";


    
    export default function App() {
        const [language, setLanguage] = useState('en');

        const { t } = useTranslation();


        const handleOnclick=(e)=>{
            e.preventDefault();
            setLanguage(e.target.value);
            if (i18n && i18n.changeLanguage) {
                i18n.changeLanguage(e.target.value);
              }          
        }
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
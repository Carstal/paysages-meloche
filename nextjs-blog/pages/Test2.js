    import React, {useState} from "react";
    import { useTranslation } from "react-i18next";
    import {i18n} from "../src/Translation/i18n";
    import { Test1 } from "./Test1";
    import { ProjectSubmission } from "./ProjectSubmission";

    
    export default function App() {
        const [language, setLanguage] = useState('en');

        const { t } = useTranslation();


        const handleOnclick=(e)=>{
            e.preventDefault();
            setLanguage(e.target.value);
            i18n.changeLanguage(e.target.value);
            
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
            {t("ProjectSubmissionTitle")}
        </p>
        <Test1 lang={language} />
    </div>
    );
    }
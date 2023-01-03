import React, {useState} from "react";
import { Test1 } from "./Test1";
import {i18n} from "../src/Translation/i18n";

 
export default function App() {
    const [language, setLanguage] = useState('en');

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
     <Test1 lang={language}/>

   </div>
 );
}
import React from "react";
import { useTranslation } from "react-i18next";
import "../src/Translation/i18n";
 
export const Test1 = () => {
const { t } = useTranslation();
 return (
   <div>
      <p>
        {t("welcome")}
      </p>
   </div>
 );
};

export default Test1;

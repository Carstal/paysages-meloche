import React from "react";
import { useTranslation } from "react-i18next";
import "../../src/Translation/i18n";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <p>
        {t("footer1")}
        <br />
        {t("footer2")}
      </p>
    </footer>
  );
};

export default Footer;

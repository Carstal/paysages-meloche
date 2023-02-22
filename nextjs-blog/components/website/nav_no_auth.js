import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import Profile from "../../pages/profile/index";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../src/Translation/i18n";
import i18n from "i18next";
import Link from "next/link";
import Image from "next/image";
import meloche from "../../public/paysagesMeloche.jpg";

const nav_no_auth = () => {
  const router = useRouter();
  const [language, setLanguage] = useState("en");

  const { t } = useTranslation();

  const handleOnclick = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
    if (i18n && i18n.changeLanguage) {
      i18n.changeLanguage(e.target.value);
    }
  };

  var lang;

  if (language == "en") {
    lang = (
      <button className={styles.loginbutton} value="fr" onClick={handleOnclick}>
        Français
      </button>
    );
  } else {
    lang = (
      <button className={styles.loginbutton} value="en" onClick={handleOnclick}>
        English
      </button>
    );
  }

  return (
    <div>
      <header>
        <div className="logo">
          <a
            href="/"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            {/* <Image src={meloche} alt="/" /> */}
            <h3>Paysages Meloche</h3>
          </a>
        </div>
        <div className="services">
          <div id="services">
            <a
              href="/services"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <h3>Services</h3>
            </a>
          </div>
          <div id="contact">
            <a
              href="/"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <h3>{t("contact")}</h3>
            </a>
          </div>
        </div>
        {Profile()}
        {lang}
      </header>

      <style jsx>{`
        header {
          width: 100vw;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          background: #222222;
          color: #ffffff;
        }
        .services {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin: auto;
        }
        .services div {
          display: flex;
          justify-content: center;
          width: 18vw;
          cursor: "pointer";
        }
        .logo {
          display: flex;
          justify-content: center;
          width: 15vw;
        }
        .services {
          display: flex;
          justify-content: center;
          width: 60vw;
        }
      `}</style>
    </div>
  );
};

export default nav_no_auth;

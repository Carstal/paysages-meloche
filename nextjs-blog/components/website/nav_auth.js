import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import Profile from "../../pages/profile/index";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../../src/Translation/i18n";
import i18n from "i18next";
import cookie from "js-cookie";

const nav_auth = (user) => {
  const router = useRouter();
  const [language, setLanguage] = useState(cookie.get("language") || "en");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  function handleLanguageChange(e) {
    const newLanguage = e.target.value;
    cookie.set("language", newLanguage);
    setLanguage(newLanguage);
  }

  var lang;

  if (language == "en") {
    lang = (
      <button
        className={styles.loginbutton}
        value="fr"
        onClick={handleLanguageChange}
      >
        Français
      </button>
    );
  } else {
    lang = (
      <button
        className={styles.loginbutton}
        value="en"
        onClick={handleLanguageChange}
      >
        English
      </button>
    );
  }

  //if authorized but not admin
  var components = (
    <div>
      <header>
        <div className="logo">
          <h2>Paysages Meloche</h2>
        </div>
        <div className="services">
          <div id="service">
            <h3>Services</h3>
          </div>
          <div id="contact">
            <h3>Contact</h3>
          </div>
          <div id="projects">
            <h3>Projects</h3>
          </div>
          <div id="calendar">
            <h3>Calendar</h3>
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
        .services div :hover {
          background-color: red;
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

  if (user.userRoles == "Admin") {
    components = (
      <div>
        <header>
          <div className="logo">
            <h2>Paysages Meloche</h2>
          </div>
          <div className="services">
            <div id="projects">
              <h3>Projects</h3>
            </div>
            <div id="calendar">
              <h3>Calendar</h3>
            </div>
            <div id="users">
              <h3>Users</h3>
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
          .services div :hover {
            background-color: red;
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
  }

  return <div>{components}</div>;
};

export default nav_auth;

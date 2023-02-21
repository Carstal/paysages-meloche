import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import Profile from "../../pages/profile/index";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../../src/Translation/i18n";
import i18n from "i18next";
import cookie from "js-cookie";
import Link from "next/link";
import meloche from "../../public/paysagesMeloche.jpg";
import Image from "next/image";

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

  const [showDropdown, setShowDropdown] = useState(false);

  //if authorized but not admin
  var components = (
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
          <div id="service">
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
          <div id="projects">
            <a
              href="/project/submission"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <h3>{t("navProject")}</h3>
            </a>
          </div>
          <div id="calendar">
            <a
              href="/calendar"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <h3>{t("calendar")}</h3>
            </a>
          </div>
        </div>
        <a href="/profile/info">
          <img className={styles.profile} src={user.picture} alt={user.name} />
        </a>
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

  if (user.userRoles == "Admin") {
    components = (
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
              {/* <Image src={meloche} alt="/"/> */}
              <h3>Paysages Meloche</h3>
            </a>
          </div>
          <div className="services">
            <div
              id="projects"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <a
                href="/project"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <h3>{t("navProject")}</h3>
              </a>
              {showDropdown && (
                <div className="dropdown">
                  <a href="/project">
                    <p className="link">{t("navProject")}</p>
                  </a>
                  <a href="/project/submission">
                    <p className="link">{t("ProjectSubmissionTitle")}</p>
                  </a>
                  <a href="/visit">
                    <p className="link">{t("visits")}</p>
                  </a>
                </div>
              )}
            </div>
            <div id="calendar">
              <a
                href="/calendar"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <h3>{t("calendar")}</h3>
              </a>
            </div>
            <div id="users">
              <a
                href="/admin"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <h3>{t("AllUsers")}</h3>
              </a>
            </div>
          </div>
          <a href="/profile/info">
            <img
              className={styles.profile}
              src={user.picture}
              alt={user.name}
            />
          </a>
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
          #projects {
            position: relative;
          }

          .link {
            color: white;
            text-decoration: none !important;
          }

          .dropdown {
            position: absolute;
            top: 100%;
            left: 30%;
            display: flex;
            flex-direction: column;
            background-color: #222222;
            z-index: 1;
          }

          .dropdown .link {
            padding: 8px 16px;
            margin: 0px;
          }

          .dropdown .link:hover {
            background-color: #00b45d;
          }
        `}</style>
      </div>
    );
  }

  return <div>{components}</div>;
};

export default nav_auth;

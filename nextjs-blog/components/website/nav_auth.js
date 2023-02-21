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

  //if authorized but not admin
  var components = (
    <div>
      <header>
        <div className="logo">
          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            {/* <Image src={meloche} alt="/" /> */}
            <h3>Paysages Meloche</h3>
          </Link>
        </div>
        <div className="services">
          <div id="service">
            <Link
              href="/services"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <h3>Services</h3>
            </Link>
          </div>
          <div id="contact">
            <Link
              href="/"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <h3>Contact</h3>
            </Link>
          </div>
          <div id="projects">
            <Link
              href="/project"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <h3>{t("navProject")}</h3>
            </Link>
          </div>
          <div id="calendar">
            <Link
              href="/calendar"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <h3>{t("calendar")}</h3>
            </Link>
          </div>
        </div>
        <Link href="/profile/info">
          <img className={styles.profile} src={user.picture} alt={user.name} />
        </Link>
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
            <Link
              href="/"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              {/* <Image src={meloche} alt="/"/> */}
              <h3>Paysages Meloche</h3>
            </Link>
          </div>
          <div className="services">
            <div id="projects">
              <Link
                href="/project"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <h3>{t("navProject")}</h3>
              </Link>
            </div>
            <div id="calendar">
              <Link
                href="/calendar"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <h3>{t("calendar")}</h3>
              </Link>
            </div>
            <div id="users">
              <Link
                href="/admin"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <h3>{t("AllUsers")}</h3>
              </Link>
            </div>
          </div>
          <Link href="/profile/info">
            <img
              className={styles.profile}
              src={user.picture}
              alt={user.name}
            />
          </Link>
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
  }

  return <div>{components}</div>;
};

export default nav_auth;
import Head from "next/head";
import styles from "../styles/Home.module.css";
// import Profile from './profile';
import Profile from ".//profile/index";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../src/Translation/i18n";
import i18n from "i18next";
import NavDynamic from "../components/website/NavDynamic";
import Footer from "../components/website/Footer";
import Link from "next/link";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <Head>
        <title>{t("EmailV")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavDynamic />
      <main>
        <h1 className={styles.title}>{t("EmailV")}</h1>
        <br></br>
        <br></br>
        <div style={{ textAlign: "center" }}>
          <Link
            href="/api/auth/login"
            style={{
              textDecoration: "none",
              padding: "20px 50px",
            }}
            class={styles.loginbutton}
          >
            {t("TryAgain")}
          </Link>
        </div>
      </main>

      <Footer />

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
          background-colour: red;
        }
        .logo {
          display: flex;
          justify-content: center;
          width: 15vw;
        }
        .login {
          display: flex;
          justify-content: center;
          width: 15vw;
          float: right;
        }
        .services {
          display: flex;
          justify-content: center;
          width: 60vw;
        }
        .login button {
          height: 7vh;
          width: 10vw;
          background: #00b45d;
          border-radius: 40px;
          color: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          font-weight: bold;
          float: right;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #333333;
          color: #ffffff;
          width: 100vw;
        }
        footer {
          width: 100vw;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #222222;
          color: #ffffff;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer p {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

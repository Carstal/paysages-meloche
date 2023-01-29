import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { getAllClients } from "../../src/components/client/client_service"
import { withPageAuthRequired, getSession } from '@auth0/nextjs-auth0';
import Profile from '../profile/index';
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../src/Translation/i18n";
import i18n from "i18next";

export default function Home({users}) {
    const router = useRouter()
    const [language, setLanguage] = useState('en');4
  
    const { t } = useTranslation();
  
    const handleOnclick = (e) => {
      e.preventDefault();
      setLanguage(e.target.value);
      if (i18n && i18n.changeLanguage) {
        i18n.changeLanguage(e.target.value);
      }
    }

    var lang

    if(language == "en"){
        lang = <button class={styles.loginbutton} value='fr' onClick={handleOnclick}>Français</button>
    } else {
        lang = <button class={styles.loginbutton} value='en' onClick={handleOnclick}>English</button>
    }

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState(users);
    
    const handleSearch = event => {
      const searchTerm = event.target.value;
      setSearchTerm(searchTerm);
    
      const filteredList = users.filter(item =>
        Object.values(item).some(field =>
          typeof field === 'string' && field.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
      setSearchResults(filteredList);
    }

  return (
    <div className={styles.container}>
      <Head>
        <title>Paysages Meloche</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className="logo">
          <h2>Paysages Meloche</h2>
        </div>
        <div className="services">
          <div id="paysagement">
            <h3>{t("Paysagement")}</h3>
          </div>
          <div id="pelouse">
            <h3>{t("Pelouse")}</h3>
          </div>
          <div id="deneigement">
            <h3>{t("Deneigement")}</h3>
          </div>
        </div>
        {Profile()}
        {lang}
      </header>
      <main>
        <h2 className={styles.title}>{t("AllUsers")}</h2>
        <div className={styles.search_container}>
          <input type="text" value={searchTerm} onChange={handleSearch} className={styles.search_input} placeholder="Search"/>
        </div>
        <div style={{height: '350px', overflowY: 'auto'}}>
          {searchResults.map((user) => (
          <div className="visit">
            <div className="info">
              <div className="vrRow">{t("User")}: {user.first_name} {user.last_name}</div>
              <div className="vrRow">{t("Email")}: {user.email}</div>
              <div className="vrRow">{t("PhoneNumber")}: {user.phone_number}</div>
              <div className="vrRow">{t("Employee")}: {user.is_employee.toString()}</div>
            </div>
            <div className="editBtnDiv">
              <button className="editBtn" name="edit" value={user.email} onClick={() => router.push({
                pathname: '/admin/[email]', query: { email: user.email }})}>
                {t("Edit")}
              </button>
            </div>
          </div>
          ))}
        </div>
        <div id="root">
        </div>
      </main>

      <footer>
        <p>
          Created By Carlo Staltari, Mohaned Bouzaidi & Yan Burton
          <br />
          Champlain College ECP Final Project 2022-2023
        </p>
      </footer>

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
        #visitContainer {
          display: flex;
          flex-direction: column;
        }
        .visit {
          display: flex;
          height: 12vh;
          width: 40vw;
          background-color: #ffffff;
          color: #111111;
          flex-direction: row;
          border-radius: 25px;
          margin: 15px;
        }
        .info {
          padding-left: 20px;
          padding-top: 10px;
          display: flex;
          flex-direction: column;
          width: 50%;
        }
        .info div {
          font-weight: bold;
          font-size: 0.9em;
        }
        .editBtnDiv {
          display: flex;
          width: 50%;
          align-items: center;
          justify-content: center;
        }
        .editBtn {
          height: 50%;
          width: 60%;
          background: #00b45d;
          border-radius: 10px;
          color: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          font-weight: bold;
        }
        .addBtnDiv {
          display: flex;
          width: 50%;
          align-items: center;
          justify-content: center;
        }
        .addBtn {
          height: 100px;
          width: 60%;
          background: #00b45d;
          border-radius: 10px;
          color: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          font-weight: bold;
          font-size: 2em;
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
        .login {
          display: flex;
          justify-content: center;
          width: 15vw;
        }
        .services {
          display: flex;
          justify-content: center;
          width: 60vw;
        }
        #calendar {
          background-color: #d9d9d9;
        }
        #month {
          display: flex;
          flex-direction: row;
          justify-content: center;
          background-color: #333333;
        }
        #month button {
          width: 75px;
          height: 50px;
        }
        #days {
          display: flex;
          flex-direction: column;
        }
        .week {
          display: flex;
          flex-direction: row;
        }
        .day {
          display: flex;
          width: 13vw;
          height: 15vh;
          color: #000000;
          border: solid 1px #555555;
          justify-content: center;
          align-items: center;
        }
        #weekdays {
          display: flex;
          flex-direction: row;
        }
        .weekday {
          display: flex;
          width: 13vw;
          height: 5vh;
          color: #000000;
          border: solid 1px #555555;
          font-weight: bold;
          justify-content: center;
          align-items: ;
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

export const getServerSideProps = withPageAuthRequired({
    returnTo: '/',
    async getServerSideProps(ctx) {
        const session = await getSession(ctx.req, ctx.res);
        const roles = session.user.userRoles

        if(roles == "Admin") {
            const list = await getAllClients();
            return { props: { users: JSON.parse(JSON.stringify(list)) } };
        } else {
            return {
                redirect: {
                  permanent: false,
                  destination: "/access_denied",
                },
                props:{},
              };
        }
    }
  });
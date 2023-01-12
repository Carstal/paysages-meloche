import Head from 'next/head'
import styles from '../../styles/Home.module.css';
// import Profile from './profile';
import Profile from '../profile/index';
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../src/Translation/i18n";
import i18n from "i18next";


export async function getServerSideProps(context) {
  const projectId = context.params.id;
  console.log("Project Id: " + projectId)
  const api = 'http://localhost:3000/api/visit/';
  const url = api + projectId;
  console.log(url);
  const res = await fetch(url);

  const visit = await res.json();

  return { props: { visit } };
}

export default async function Home({ visit }) {
  const [language, setLanguage] = useState('en');


  const { t } = useTranslation();


  const handleOnclick = (e) => {
    e.preventDefault();
    
  
    setLanguage(e.target.value);
    if (i18n && i18n.changeLanguage) {
      i18n.changeLanguage(e.target.value);
    }
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>{t("ProjectSubmissionTitle")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className='logo'>
          <h2>Paysages Meloche</h2>
        </div>
        <div className='services'>
          <div id='paysagement'>
            <h3>{t("Paysagement")}</h3>
          </div>
          <div id='pelouse'>
            <h3>{t("Pelouse")}</h3>
          </div>
          <div id='deneigement'>
            <h3>{t("Deneigement")}</h3>

          </div>
        </div>
        {Profile()}
        <div className='login'>
          <button class={styles.loginbutton} value='fr' onClick={handleOnclick}>
          Français
          </button>
          <button class={styles.loginbutton} value='en' onClick={handleOnclick}>
          English

          </button>

        </div>
      </header>
      <main>
        <h2 className={styles.title}>{t("VisitInfo")}</h2>

        <div className="container">
          <div className="card mt-5">
            {/* {url} */}
              <div>
                Visit: {visit.visit_id}
              </div>
            {/* <form className="card-body" action="/api/visit/form" method="POST">
              <input
                type="hidden"
                className="form-control"
                id="visitId"
                name="visitId"
                value={visit.visit_id}
              />
              <input
                type="hidden"
                className="form-control"
                id="projectId"
                name="projectId"
                value={visit.project_id}
              />
              <div className="form-group mb-3">
                <label className="mb-2">
                  <strong>Employees:</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="employees"
                  name="employees"
                  defaultValue={visit.employee_ids}
                />
              </div>

              <div className="form-group mb-3">
                <label className="mb-2">
                  <strong>Start Date:</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="startDate"
                  name="startDate"
                  defaultValue={visit.start_date}
                />
              </div>

              <div className="form-group mb-3">
                <label className="mb-2">
                  <strong>End Date:</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="endDate"
                  name="endDate"
                  defaultValue={visit.end_date}
                />
              </div>

              <div className="form-group mt-3">
                <button type="submit" className={styles.submitbutton}>
                  Update
                </button>
              </div>
            </form> */}

          </div>
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

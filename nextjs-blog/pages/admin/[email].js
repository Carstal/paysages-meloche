import Head from "next/head";
import styles from "../../styles/Home.module.css";
import clientPromise from "../../lib/mongodb";
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../src/Translation/i18n";

import NavDynamic from "../../components/website/NavDynamic";
import Footer from '../../components/website/Footer';

export default function UserInfo({ data }) {
  const { t } = useTranslation();

  // for some reason, doing this will disable the bug that makes the submit button not centered on first load.
  var submit = (
    <div className="form-group mt-3">
      <button type="submit" className={styles.submitbutton}>
        {t("Update")}
      </button>
    </div>
  );

  var emp;

  if (data?.is_employee) {
    emp = (
      <select name="is_employee" id="is_employee" class={styles.selectEmp}>
        <option value={true} selected>
          {t("Yes")}
        </option>
        <option value={false}>{t("No")}</option>
      </select>
    );
  } else {
    emp = (
      <select name="is_employee" id="is_employee" class={styles.selectEmp}>
        <option value={true}>{t("Yes")}</option>
        <option value={false} selected>
          {t("No")}
        </option>
      </select>
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{t("TitleProfile")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavDynamic />
      <main>
        <h1 className={styles.title}>{t("TitleProfile")}</h1>
        <br />
        <div className="container">
          <div className="card mt-5">
            <form className="card-body" action="/api/forms/form" method="POST">
              <input
                type="hidden"
                className="form-control"
                value={data?.email}
                id="email"
                name="email"
              />
              <div className="form-group mb-3">
                <label className="mb-2">
                  <strong>{t("FirstName")}</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={data?.first_name}
                  id="first_name"
                  name="first_name"
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label className="mb-2">
                  <strong>{t("LastName")}</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={data?.last_name}
                  id="last_name"
                  name="last_name"
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label className="mb-2">
                  <strong>{t("PhoneNumber")}</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={data?.phone_number}
                  id="phone_number"
                  name="phone_number"
                  required
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  title="Please enter phone number in the following format: 000-000-0000."
                />
              </div>

              <div className="form-group mb-3">
                <label className="mb-2">
                  <strong>{t("Employee")}?</strong>
                </label>
                {emp}
              </div>
              {submit}
            </form>
          </div>
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
        }
        .d-grid mt-3 {
          display: flex;
          justify-content: center;
          width: 15vw;
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
        }
        .d-grid mt-3,
        button {
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
        .form-group mb-3,
        textarea,
        input {
          display: block;
          width: 100%;
          padding: 0.5rem 0.8rem 0.5rem 0.8rem;
          margin: 0.9vw 0;
          border: 0;
          border-radius: 5px;
          font-size: 20px;
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

      <style jsx global>
        {`
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
        `}
      </style>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired({
  returnTo: "/",
  async getServerSideProps(ctx) {
    const client = await clientPromise;
    const db = client.db("FinalProject");
    const session = await getSession(ctx.req, ctx.res);
    const roles = session.user.userRoles;

    if (roles == "Admin") {
      const post = await db.collection("Client").findOne({
        email: ctx.params.email,
      });
      return { props: { data: JSON.parse(JSON.stringify(post)) } };
    } else {
      return {
        redirect: {
          permanent: false,
          destination: "/access_denied",
        },
        props: {},
      };
    }
  },
});

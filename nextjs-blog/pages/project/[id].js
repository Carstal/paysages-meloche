import Head from "next/head";
import styles from "../../styles/Home.module.css";
// import clientPromise from "../../lib/mongodb";
// import Profile from '../profile';
// var mongoose = require('mongoose');
import Profile from "../profile/index";
import { useRouter } from "next/router";
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import { useTranslation } from "react-i18next";
import '../../src/Translation/i18n';
import MiniVisitCardView from '../../components/visit/MiniVisitCardView';
import QuoteDisplay from "../../components/quote/QuoteDisplay";
import InvoiceDisplay from "../../components/invoice/InvoiceDisplay";
import VisitProjectForm from "../../components/visit/VisitProjectForm";

import NavDynamic from "../../components/website/NavDynamic";
import Footer from "../../components/website/Footer";

export const getServerSideProps = withPageAuthRequired({
  returnTo: "/index",
  async getServerSideProps(ctx) {
    const session = await getSession(ctx.req, ctx.res);
    const projectId = ctx.params.id;
    const api = "https://paysages-meloche.vercel.app/api/project/";
    const url = api + projectId;
    // console.log(url);
    const projectRes = await fetch(url);
    const project = await projectRes.json();

    // console.log(data)
    return { props: {project} };
  },
});

export default function DisplayProject({ project }) {
  const router = useRouter();
  const { t } = useTranslation();
  const currentProject = project.project;
  const projectQuote = project.quote;
  const projectInvoice = project.invoice;
  const projectVisits = project.visits;
  const dimensions = currentProject.dimensions;
  const visits = currentProject.visits;
  return (
    <div className={styles.container}>
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavDynamic />
      <main>
        <h1 className={styles.title}>{t("ProjectDetails")}</h1>
        <div className="container">
          <div className="card mt-5">
            <div className={styles.projectDetails}>
            <div>
                <div>
                  <div>{t("ProjectID")}</div>
                  <div>{currentProject.project_id}</div>
                </div>
                <div>
                  <div>{t("UserID")}</div>
                  <div>{currentProject.user_id}</div>
                </div>
                <div>
                  <div>{t("Address")}</div>
                  <div>{currentProject.address}</div>
                </div>
            </div>
            <div>
                <div>
                  <div>{t("Size1")}</div>
                  <div>{dimensions[0]}</div>
                </div>
                <div>
                  <div>{t("Size2")}</div>
                  <div>{dimensions[0]}</div>
                </div>
                <div>
                  <div>{t("ClientDescription")}</div>
                  <div>{currentProject.description}</div>
                </div>
              </div>
              </div>

          </div>
        <div className={styles.projectVisits}>
        <h3 className={styles.title}>{t("visitsTitle")}</h3>
        <MiniVisitCardView visits={projectVisits}/>
        <VisitProjectForm project={currentProject}/>

        </div>

        <div className={styles.projectQuote}>
        <h3 className={styles.title}>{t("quoteTitle")}</h3>
        <div className={styles.quoteDisplay}>
          <QuoteDisplay quote={projectQuote} project={currentProject}/>
        </div>
        </div>

        <div className={styles.projectInvoice}>
        <h3 className={styles.title}>{t("invoiceTitle")}</h3>
        <div className={styles.invoiceDisplay}>
          <InvoiceDisplay invoice={projectInvoice} project={currentProject}/>
        </div>
        </div>

        </div>
      </main>

      <Footer />

      <style jsx>{`
        .addBtnDiv{
          display:flex;
          justify-content:center;
        }
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

        table {
          border: 2px solid forestgreen;
          width: 800px;
          height: 200px;
        }

        th {
          border-bottom: 1px solid black;
        }

        td {
          text-align: center;
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

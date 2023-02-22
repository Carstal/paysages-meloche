import Head from "next/head";
import styles from "../../styles/Home.module.css";
// import clientPromise from "../../lib/mongodb";
// import Profile from '../profile';
// var mongoose = require('mongoose');
import Profile from "../profile/index";
import { useRouter } from "next/router";
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import VisitCardView from '../../components/visit/VisitCardView';
import { MiniVisitCard } from '../../components/visit/MiniVisitCard';

import NavDynamic from "../../components/website/NavDynamic";
import Footer from '../../components/website/Footer';

export const getServerSideProps = withPageAuthRequired({
  returnTo: "/index",
  async getServerSideProps(ctx) {
    const session = await getSession(ctx.req, ctx.res);
    const projectId = ctx.params.id;
    const api = 'http://localhost:3000/api/project/';
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
  const currentProject = project.project;
  if(currentProject.quote_id != 0){
    document.getElementById("quoteForm").style.display = "none";
    document.getElementById("quoteCard").style.display = "block";
  }
  if(currentProject.invoice_id != 0){
    document.getElementById("invoiceForm").style.display = "none";
    document.getElementById("invoiceCard").style.display = "block";
  }
  const projectQuote = project.quote
  const projectVisits = project.visits
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
        <h1 className={styles.title}>Project Details</h1>
        <div className="container">
          <div className="card mt-5">
                <div>
                  <div>Project</div>
                  <div>{currentProject.project_id}</div>
                </div>
                <div>
                  <div>User</div>
                  <div>{currentProject.user_id}</div>
                </div>
                <div>
                  <div>Address</div>
                  <div>{currentProject.address}</div>
                </div>
                <div>
                  <div>Length</div>
                  <div>{dimensions[0]}</div>
                </div>
                <div>
                  <div>Width</div>
                  <div>{dimensions[0]}</div>
                </div>
                <div>
                  <div>Description</div>
                  <div>{currentProject.description}</div>
                </div>
          </div>

        <h3 className={styles.title}>Visits</h3>
        {/* <VisitCardView visits={visits}/> */}
        {projectVisits.map((visit)=>(
          // <MiniVisitCard visit={visit}/>
          <div>
            Visit ID: {visit.visit_id}
          </div>
        ))}
        <div className="addBtnDiv">
          <form action="/visit/add" method="POST">
          <input type="hidden"
          className="form-control"
          defaultValue={currentProject.project_id}
          id="projectId" name="projectId" />
          <input type="hidden"
          className="form-control"
          defaultValue={currentProject.user_id}
          id="userId" name="userId" />
          <button
            className="addBtn"
            type="submit"
          >
            Add Visit
          </button>
          </form>
        </div>
        <h3 className={styles.title}>Quote</h3>
        <div id="quoteCard" hidden>
          Quote Id:{projectQuote.quote_id}
        </div>
        <div id="quoteForm">
          <form action="/quote" method="POST">
          <input type="hidden"
          className="form-control"
          defaultValue={currentProject.project_id}
          id="projectId" name="projectId" />
          <input type="hidden"
          className="form-control"
          defaultValue={currentProject.user_id}
          id="userId" name="userId" />
          <button
            className="addBtn"
            type="submit"
          >
            Create Quote
          </button>
          </form>
        </div>

        <h3 className={styles.title}>Invoice</h3>
        {/* TODO: Invoice LMAO */}
        <div id="invoiceCard" hidden>
          Quote Id:{projectQuote.quote_id}
        </div>
        <div id="invoiceForm">
          <form action="/quote" method="POST">
          <input type="hidden"
          className="form-control"
          defaultValue={currentProject.project_id}
          id="projectId" name="projectId" />
          <input type="hidden"
          className="form-control"
          defaultValue={currentProject.user_id}
          id="userId" name="userId" />
          <button
            className="addBtn"
            type="submit"
          >
            Create Invoice
          </button>
          </form>
        </div>
        </div>
      </main>

      <Footer/>

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

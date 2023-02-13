import Head from "next/head";
import styles from "../../styles/Home.module.css";
// import clientPromise from "../../lib/mongodb";
// import Profile from '../profile';
// var mongoose = require('mongoose');
import Profile from "../profile/index";
import { useRouter } from "next/router";
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import VisitCardView from '../../components/visit/VisitCardView';

export const getServerSideProps = withPageAuthRequired({
  returnTo: "/index",
  async getServerSideProps(ctx) {
    const session = await getSession(ctx.req, ctx.res);
    const projectId = ctx.params.id;
    const api = 'http://localhost:3000/api/project/';
    const url = api + projectId;
    // console.log(url);
    const res = await fetch(url);

    const data = await res.json();

    console.log(data)
    return { props: {data} };
  },
});

export default function DisplayProject({ data }) {
  const router = useRouter();
  const project = data.project;
  const dimensions = project.dimensions;
  const visits = project.visits;
  return (
    <div className={styles.container}>
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className="logo">
          <h2>Paysages Meloche</h2>
        </div>
        <div className="services">
          <div id="paysagement">
            <h3>Paysagement</h3>
          </div>
          <div id="pelouse">
            <h3>Pelouse</h3>
          </div>
          <div id="deneigement">
            <h3>Deneigement</h3>
          </div>
        </div>
        {Profile()}
      </header>
      <main>
        <h1 className={styles.title}>Project Details</h1>
        <div className="container">
          <div className="card mt-5">
                <div>
                  <div>Project</div>
                  <div>{project.project_id}</div>
                </div>
                <div>
                  <div>User</div>
                  <div>{project.user_id}</div>
                </div>
                <div>
                  <div>Address</div>
                  <div>{project.address}</div>
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
                  <div>{project.description}</div>
                </div>
          </div>

        <h3 className={styles.title}>Visits</h3>
        {/* <VisitCardView visits={visits}/> */}
        <div className="addBtnDiv">
          <button
            className="addBtn"
            name="addVisit"
            onClick={() =>
              fetch('/visit/add', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: {"project": project.project_id,
                        "user": project.user_id},
              })
            }
          >
            Add Visit
          </button>
        </div>
        <h3 className={styles.title}>Quote</h3>

        <h3 className={styles.title}>Invoice</h3>
        {/* <VisitCardView visits={visits}/> */}
          {/* <p className={styles.description}>Currently Under Maintenance</p> */}
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

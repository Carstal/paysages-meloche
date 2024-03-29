import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";

import NavDynamic from "../../components/website/NavDynamic";
import Footer from "../../components/website/Footer";

// function updateVisit(){
//   // TODO: grab form values and pass to api
//   return null;
// }
// function deleteVisit(id){
//   // TODO: pass id to api
//   console.log("-------deleteVisit function------");
//   console.log(id);
//   if(id){
//     const api = 'http://localhost:3000/api/visit/delete/';
//     const url = api + id;
//     console.log(url);
//     const res = fetch(url);

//     const data = res.json();

//     return data;
//   }
//   else{
//     return null;
//   }
// }

export async function getServerSideProps(context) {
  const projectId = context.params.id;
  // console.log("Project Id: " + projectId)
  const api = "https://paysages-meloche.vercel.app/api/visit/";
  const url = api + projectId;
  // console.log(url);
  const res = await fetch(url);

  const data = await res.json();

  return { props: { data } };
}

export default function Home({ data }) {
  const router = useRouter();
  function dateFormat(date) {
    let newDate = new Date(date);
    let dd = newDate.getDate() + 1;
    let mm = newDate.getMonth() + 1;
    const yyyy = newDate.getFullYear();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    const formattedDate = yyyy + "-" + mm + "-" + dd;
    // console.log(formattedDate);

    return formattedDate;
    // return newDate;
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Paysages Meloche</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavDynamic />
      <main>
        <h2 className={styles.title}>Visit Information</h2>
        <div className="container">
          <div className="VisitNoEdit">
            <div className="VisitId">Visit ID: {data.visit.visit_id}</div>
            <div className="UserId">User ID: {data.visit.user_id}</div>
            <div className="ProjectId">Project ID: {data.visit.project_id}</div>
          </div>
          <div className="card mt-5">
            {/* <form className="card-body" action="/api/visit/form" method="POST"> */}
            <form
              className="card-body"
              action="/api/visit/update"
              method="POST"
            >
              <input
                type="hidden"
                className="form-control"
                id="visitId"
                name="visitId"
                value={data.visit.visit_id}
              />
              <input
                type="hidden"
                className="form-control"
                id="userId"
                name="userId"
                value={data.visit.user_id}
              />
              <input
                type="hidden"
                className="form-control"
                id="projectId"
                name="projectId"
                value={data.visit.project_id}
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
                  defaultValue={data.visit.employee_ids}
                />
              </div>

              <div className="form-group mb-3">
                <label className="mb-2">
                  <strong>Start Date:</strong>
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="startDate"
                  name="startDate"
                  defaultValue={dateFormat(data.visit.start_date)}
                />
              </div>

              <div className="form-group mb-3">
                <label className="mb-2">
                  <strong>End Date:</strong>
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="endDate"
                  name="endDate"
                  defaultValue={dateFormat(data.visit.end_date)}
                />
              </div>

              <div className="form-group mt-3">
                <button type="submit" className={styles.submitbutton}>
                  Update
                </button>
              </div>
            </form>
            <br />
            <div className="form-group mt-3">
              {/* <button className={styles.deleteButton} onClick={deleteVisit(data.visit.visit_id)}> */}
              <button
                className={styles.deleteButton}
                onClick={() =>
                  router.push({
                    pathname: "/api/visit/delete/[id]",
                    query: { id: data.visit.visit_id },
                  })
                }
              >
                Delete
              </button>
            </div>
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

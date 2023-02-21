import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import moment from "moment";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import VisitTable from "../../components/visit/VisitTable";
import VisitCardView from "../../components/visit/VisitCardView";
import NavDynamic from "../../components/website/NavDynamic";
import Footer from "../../components/website/Footer";

export async function getServerSideProps() {
  const res = await fetch("https://paysages-meloche.vercel.app/api/visit");
  const visits = await res.json();
  // console.log("--------VISITS----------");
  // console.log(visits[data]);

  return { props: { visits } };
}

export default function Home({ visits }) {
  const { t } = useTranslation();
  var [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const router = useRouter();
  events = visits;
  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => {
    setDateState(e);
  };

  useEffect(() => {
    if (!startDate && !endDate) {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(
        events.filter((event) => {
          return (
            (startDate
              ? moment(event.start_date).isSameOrAfter(moment(startDate))
              : true) &&
            (endDate
              ? moment(event.end_date).isSameOrBefore(moment(endDate))
              : true)
          );
        })
      );
    }
  }, [events, startDate, endDate]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Paysages Meloche</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavDynamic />
      <main>
        <h2 className={styles.title}>All Visits</h2>
        <div className="filter-container">
          <div className="filter-item">
            <label htmlFor="start-date">{t("startD")}</label>
            <input
              id="start-date"
              type="date"
              value={startDate ? moment(startDate).format("YYYY-MM-DD") : ""}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="filter-item">
            <label htmlFor="end-date">{t("endD")}</label>
            <input
              id="end-date"
              type="date"
              value={endDate ? moment(endDate).format("YYYY-MM-DD") : ""}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
        <VisitCardView visits={filteredEvents} />
        {/* <VisitTable visits={visits}/> */}

        {/* <div id="root"></div>
        <div className="addBtnDiv">
          <button
            className="addBtn"
            name="addVisit"
            onClick={() =>
              router.push({
                pathname: "/visit/add",
              })
            }
          >
            Add Visit
          </button>
        </div> */}
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

// function editVisit(){
// const id = visit.visit_id;
//   const id = 1;
//   const url = "http://localhost:3000/visit/"+id;

//   window.location.reload(url);
// }

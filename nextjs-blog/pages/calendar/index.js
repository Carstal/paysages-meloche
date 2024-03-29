import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import clientPromise from "../../lib/mongodb";
import { useTranslation } from "react-i18next";
import React, { useState, useCallback, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useRouter } from "next/router";
import moment from "moment";
import CalendarExportButton from "../../components/calendar/CalendarExportButton";

import NavDynamic from "../../components/website/NavDynamic";
import Footer from "../../components/website/Footer";

export const getServerSideProps = withPageAuthRequired({
  returnTo: "/calendar",
  async getServerSideProps(ctx) {
    const session = await getSession(ctx.req, ctx.res);
    const roles = session.user.userRoles;

    if (roles == "Admin") {
      const res = await fetch("https://paysages-meloche.vercel.app/api/visit");
      const visits = await res.json();
      return { props: { visits } };
    } else {
      const client = await clientPromise;
      const db = client.db("FinalProject");
      const user = await db.collection("Client").findOne({
        email: session.user.email,
      });
      return {
        redirect: {
          permanent: false,
          destination: "/calendar/" + user.user_id,
        },
        props: {},
      };
    }
  },
});

const locales = {
  "en-CA": require("date-fns/locale/en-CA"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function Home({ visits }) {
  const { t } = useTranslation();
  var [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const router = useRouter();

  var allVisits = [];
  visits.forEach((visit) =>
    allVisits.push({
      title: "Project " + visit.project_id,
      visit: visit.visit_id,
      project: visit.project_id,
      start: new Date(visit.start_date),
      end: new Date(visit.end_date),
    })
  );
  events = allVisits;
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
              ? moment(event.start).isSameOrAfter(moment(startDate))
              : true) &&
            (endDate ? moment(event.end).isSameOrBefore(moment(endDate)) : true)
          );
        })
      );
    }
  }, [events, startDate, endDate]);

  const handleSelectVisit = useCallback(
    (event) =>
      router.push({
        pathname: "https://paysages-meloche.vercel.app/project/[id]",
        query: { id: event.project },
      }),
    []
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Paysages Meloche</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavDynamic />
      <main>
        <h2 className={styles.title}>{t("masterCalendar")}</h2>
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
          <CalendarExportButton events={events} />
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
        <div>
          <Calendar
            localizer={localizer}
            events={filteredEvents}
            startAccessor="start"
            endAccessor="end"
            style={{ width: "80vw", height: "55vh" }}
            onSelectEvent={handleSelectVisit}
          />
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
        .filter-container {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .filter-item {
          display: flex;
          align-items: center;
          margin: 20px;
        }

        .filter-item label {
          margin-right: 10px;
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
        .visit {
          display: flex;
          flex-direction: column;
          background-color: #00b45d;
          width: 90%;
          height: auto;
          border-radius: 5px;
          font-size: 0.8em;
          font-weight: bold;
          justify-content: start;
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
          align-items: center;
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

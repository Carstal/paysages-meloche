import Head from 'next/head'
import styles from '../../styles/Home.module.css';

// Using react-big-calendar, an open-source alternative to Full Calendar
// Using react-datepicker, for small calendar date selection
// import DatePicker from 'react-datepicker';
import React, {useState} from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Router } from 'next/router';

export async function getServerSideProps(context) {
  const userId = context.params.id;
  const api = 'http://localhost:3000/api/visit/user/';
  const url = api + projectId;
  const res = await fetch(url);
  const visits = await res.json();

  return { props: { visits }};
}


const locales = {
  'en-CA': require('date-fns/locale/en-CA')
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

export default function Home({visits}) {
    const router = new Router;
    const userId = router.id;
    var empVisits = []

    // visits.forEach((visit) => (
    //     if (visit.employees_ids.includes(userId)) {
    //         empVisits.push({
    //         title: 'Project '+ visit.project_id,
    //         start: new Date(visit.start_date),
    //         end: new Date(visit.end_date)
    //         })
    //     }
    // ))

  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Paysages Meloche</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className='logo'>
          <h2>Paysages Meloche</h2>
        </div>
        <div className='services'>
          <div id='paysagement'>
            <h3>Paysagement</h3>
          </div>
          <div id='pelouse'>
            <h3>Pelouse</h3>
          </div>
          <div id='deneigement'>
            <h3>Deneigement</h3>
          </div>
        </div>
        <div className='login'>
          <button>
            Login
          </button>
        </div>
      </header>
      <main>
        <h2 className={styles.title}>
          Master Calendar
        </h2>
        <div>
          <Calendar localizer={localizer} events={empVisits}
            startAccessor='start' endAccessor='end'
            style={{width:'80vw', height:'50vh'}}/>
        </div>
      </main>

      <footer>
        <p>Created By Carlo Staltari, Mohaned Bouzaidi & Yan Burton
        <br />
        Champlain College ECP Final Project 2022-2023</p>
      </footer>

      <style jsx>{`
        header {
          width: 100vw;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          background: #222222;
          color: #FFFFFF;
        }
        .services {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin: auto;
        }
        .services div{
          display: flex;
          justify-content: center;
          width: 18vw;
          cursor: 'pointer';
        }
        .services div :hover{
          background-color: red;
        }
        .logo{
          display: flex;
          justify-content: center;
          width: 15vw;
        }
        .login{
          display: flex;
          justify-content: center;
          width: 15vw;
        }
        .services{
          display: flex;
          justify-content: center;
          width: 60vw;
        }
        #calendar{
          background-color: #D9D9D9;
        }
        #month{
          display: flex;
          flex-direction: row;
          justify-content: center;
          background-color: #333333;
        }
        #month button{
          width: 75px;
          height: 50px;
        }
        #days{
          display: flex;
          flex-direction: column;
        }
        .week{
          display: flex;
          flex-direction: row;
        }
        .day{
          display: flex;
          width: 13vw;
          height:15vh;
          color: #000000;
          border: solid 1px #555555;
          justify-content: center;
          align-items: center;
        }
        .visit{
          display: flex;
          flex-direction: column;
          background-color: #00B45D;
          width: 90%;
          height: auto;
          border-radius: 5px;
          font-size: .8em;
          font-weight: bold;
          justify-content: start;
        }
        #weekdays{
          display: flex;
          flex-direction: row;
        }
        .weekday{
          display: flex;
          width: 13vw;
          height: 5vh;
          color:#000000;
          border: solid 1px #555555;
          font-weight: bold;
          justify-content: center;
          align-items: center;
        }
        .login button{
          height: 7vh;
          width: 10vw;
          background: #00B45D;
          border-radius: 40px;
          color: #FFFFFF;
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
          color: #FFFFFF;
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
          color: #FFFFFF;
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
  )
}
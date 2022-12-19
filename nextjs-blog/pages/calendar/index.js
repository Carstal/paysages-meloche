import Head from 'next/head'
import styles from '../../styles/Home.module.css';

export default function Home() {
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


        <div id="calendar">
          <div id="month">
            <button name="Back" value="Back">Back</button>
            <h3>Month / 9999</h3>
            <button name="forward" value="forward">Forward</button>
          </div>
          <div id="weekdays">
            <div className="weekday">Sunday</div>
            <div className="weekday">Monday</div>
            <div className="weekday">Tuesday</div>
            <div className="weekday">Wednesday</div>
            <div className="weekday">Thursday</div>
            <div className="weekday">Friday</div>
            <div className="weekday">Saturday</div>
          </div>
          <div id="days">
            <div className="week">
              <div className="day">1</div>
              <div className="day">2</div>
              <div className="day">3</div>
              <div className="day">4</div>
              <div className="day">5</div>
              <div className="day">6</div>
              <div className="day">7</div>
            </div>
            <div className="week">
              <div className="day">8</div>
              <div className="day">9</div>
              <div className="day">10</div>
              <div className="day">11</div>
              <div className="day">12</div>
              <div className="day">13</div>
              <div className="day">14</div>
            </div>
            <div className="week">
              <div className="day">15</div>
              <div className="day">16</div>
              <div className="day">17</div>
              <div className="day">18</div>
              <div className="day">19</div>
              <div className="day">20</div>
              <div className="day">21</div>
            </div>
            <div className="week">
              <div className="day">22</div>
              <div className="day">23</div>
              <div className="day">24</div>
              <div className="day">25</div>
              <div className="day">26</div>
              <div className="day">27</div>
              <div className="day">28</div>
            </div>
            <div className="week">
              <div className="day">29</div>
              <div className="day">30</div>
              <div className="day">31</div>
              <div className="day">32</div>
              <div className="day">33</div>
              <div className="day">34</div>
              <div className="day">35</div>
            </div>
          </div>
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
          width: 10vw;
          height:10vh;
          color: #000000;
          border: solid 1px #555555;
        }
        #weekdays{
          display: flex;
          flex-direction: row;
        }
        .weekday{
          display: flex;
          width: 10vw;
          height: 5vh;
          color:#000000;
          border: solid 1px #555555;
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

// export async function getServerSideProps(){
//   const req = await fetch("");
//   const data = await req.json;

//   return props:{"":""};
// }
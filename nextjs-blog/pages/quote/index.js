import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";



// export async function getServerSideProps(context) {
//   const projectId = context.params.id;
//   console.log("Project Id: " + projectId)
//   const api = 'http://localhost:3000/api/visit/';
//   const url = api + projectId;
//   console.log(url);
//   const res = await fetch(url);

//   const data = await res.json();

//   return { props: { data }};
// }

export default function Home() {
  // const router = useRouter()
  // function dateFormat(date){
  //   let newDate = new Date(date);
  //   let dd = newDate.getDate()+1;
  //   let mm = newDate.getMonth()+1;
  //   const yyyy = newDate.getFullYear();

  //   if (dd < 10) dd = '0' + dd;
  //   if (mm < 10) mm = '0' + mm;
  //   const formattedDate = yyyy + '-' + mm + '-' + dd;
  //   console.log(formattedDate);

  //   return formattedDate;
    // return newDate;
    // }
    var items = []

    // function addItem(){
    //     let item = document.getElementById('itemName').value;
    //     let price = parseFloat(document.getElementById('price'));
    //     if(isNaN(price)){
    //         document.getElementById("error").innerHTML = 'Invalid number: '+price;
    //     }
    //     else if(price <= 0){
    //         document.getElementById("error").innerHTML = price+' is smaller than 0';
    //     }
    //     else{
    //         price = parseFloat(price);
    //         items.push({item, price});
    //     }
    // }
  return (
    <div className={styles.container}>
      <Head>
        <title>Paysages Meloche</title>
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
        <div className="login">
          <button>Login</button>
        </div>
      </header>
      <main>
        <h2 className={styles.title}>New Quote</h2>
        <div className="container">
            <div id="error"></div>
          <div className="card mt-5">
            <div>ITEMS</div>
            <ul>
            {items.map((item) => (
                <li>
                    {item[0]} - {item[1]}$
                </li>
            ))}
            </ul>
            <div className="card-body">
              {/* <div className="form-group mb-3">
                <label className="mb-2">
                  <strong>Visit Id:</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="visitId"
                  name="visitId"
                />
              </div> */}
              {/* <div className="form-group mb-3">
                <label className="mb-2">
                  <strong>User Id:</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="userId"
                  name="userId"
                />
              </div> */}
              {/* <div className="form-group mb-3">
                <label className="mb-2">
                  <strong>Project Id:</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="projectId"
                  name="projectId"
                />
              </div> */}
              {/* <div className="form-group mb-3">
                <label className="mb-2">
                  <strong>Employees:</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="employees"
                  name="employees"
                />
              </div> */}

              <div className="form-group mb-3">
                <label className="mb-2">
                  <strong>Item Name:</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="itemName"
                  name="itemName"
                />
              </div>

              <div className="form-group mb-3">
                <label className="mb-2">
                  <strong>Price:</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  name="price"
                />
              </div>

              <div className="form-group mt-3">
                <button onClick={addItem()} className={styles.submitbutton}>
                {/* <button type="submit" className={styles.submitbutton}> */}
                  Add Item
                </button>
              </div>
            </div>
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
        .form-group mb-3, textarea, input{
          display: block;
          width: 100%;
          padding: .5rem .8rem .5rem .8rem;
          margin: .9vw 0 ;
          border:0;
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

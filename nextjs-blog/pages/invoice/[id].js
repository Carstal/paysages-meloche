import styles from "../../styles/Home.module.css";
import Head from "next/head";
import React, { useState } from 'react';
// import { parseBody } from "next/dist/server/api-utils/node";
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";

import NavDynamic from "../../components/website/NavDynamic";
import Footer from '../../components/website/Footer';

export const getServerSideProps = withPageAuthRequired({
    returnTo: "/index",
    async getServerSideProps(ctx) {
        const session = await getSession(ctx.req, ctx.res);
        const quoteId = ctx.params.id;
        const api = 'http://localhost:3000/api/quote/';
        const url = api + quoteId;
      // console.log(url);
        const quoteRes = await fetch(url);
        const quote = await quoteRes.json();

    //   console.log(quote)
        return { props: {quote} };
    },
});

export default function Home({ quote }) {
  const user_id = quote.user_id
  const project_id = quote.project_id
  const jsonItems = quote.items

//   TODO: JSON to array to initialize items list for quote edit
  const jsonToArr = (json) =>{
    var tempArr = [];
    for(var i in json){
        console.log(i)
        var el = i
        tempArr.push(el)
    }
    return tempArr;
  };

  const quoteItems = jsonToArr(jsonItems)

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const [items, setItems] = useState(quoteItems);

  const addItem = (name, price) => {
  setItems([...items, { name, price }]);
  };

  for(var i in jsonItems){
    console.log(i)
    console.log(jsonItems[i])
    addItem(i,parseFloat(jsonItems[i]).toFixed(2));
  }

  const pairs = {}
  items.forEach((item)=>(
      pairs[item.name] = item.price
  ))

  const handleSubmit = (e) => {
  e.preventDefault();
  const parsedPrice = parseFloat(price).toFixed(2);
  const subName = document.getElementById('itemName').value;
  const subPrice = document.getElementById('itemPrice').value;
  if (name.length > 0 && isNaN(parsedPrice) != true && parsedPrice >= 0){
      document.getElementById("error").style.display="none";
      addItem(name,parsedPrice);
      setName('');
      setPrice('');
  }
  else{
      var errMsg = "Invalid entry: <ul>";
      if(name.length == 0){
          errMsg += "<li>Please enter an item name</li>";
      }
      if(isNaN(parsedPrice) == true){
          errMsg += "<li>Please enter a number in price field</li>";
      }
      else if(parsedPrice < 0){
          errMsg += "<li>Please enter a positive number</li>";
      }
      else{
          errMsg += "<li>Field was left empty</li>";
      }
      errMsg += "</ul>";
      document.getElementById("error").innerHTML = errMsg;
      document.getElementById("error").style.display = "block";
  }
  };
  // function SplitName(text){
  //   const splitArr = text.split("-");
  //   var exportHTML = "<div>";
  //   for(let i = 0; i < splitArr.length; i++){
  //     if(i > 0){
  //       exportHTML += "<li>"+splitArr[i]+"</li>";
  //     }
  //     else{
  //       exportHTML += "<strong>"+splitArr[i]+"</strong><ul>";
  //     }
  //   }
  //   exportHTML += "</ul></div>";
  //   return exportHTML;
  // }

  return (
    <div className={styles.container}>
      <Head>
        <title>Paysages Meloche</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavDynamic />
      <main>
        <h2 className={styles.title}>New Quote</h2>
        <div className="container">
          <div className="card mt-5">
            <div className="card-body">
                <div id="error" hidden></div>
                  <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    id='itemName'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Add Item"
                    />
                    <input
                    type="text"
                    id='itemPrice'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Price"
                    />
                    <button type='submit'>Add Item</button>
                  </form>
            </div>
            <div id="itemTable">
              ITEMS
            <table>
              <tr>
                <th>Description</th>
                <th>Price</th>
              </tr>
            {items.map((item) => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.price}$</td>
                </tr>
            ))}
            </table>
            {/* TODO: Fix total */}
            Total: MOnneys $
            </div>

            <div className="card-body">
              {/* <h4>User Id: {user_id}</h4> */}
              {/* <h4>Project Id: {project_id}</h4> */}
              <form action="/api/quote/editQuote" method="POST">
                <input type="hidden" name="userID" defaultValue={user_id} />
                <input type="hidden" name="projectID" defaultValue={project_id} />
                <input type="hidden" name="items" value={JSON.stringify(pairs)} />
                <button type="submit">Submit Invoice</button>
              </form>
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

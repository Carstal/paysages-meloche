import Head from 'next/head'
import styles from '../styles/Home.module.css';
import clientPromise from "../lib/mongodb";
// import Profile from './profile';
import Profile from './profile/index';
import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import "../src/Translation/i18n";
import i18n from "i18next";
import emailjs from '@emailjs/browser';

import { withPageAuthRequired, getSession } from '@auth0/nextjs-auth0';

export default function Project({ data }) {
  const [language, setLanguage] = useState('en');

  const form = useRef()

  const sendemail = (f) => {
    f.preventDefault();

    emailjs.sendForm('service_x5oinbn', 'template_mhlr8e7', form.current, 'WOyEwwmSvm2IQcFF3', this)
    .then((result)=> {
        console.log(result.text);
    }, (error) => {
        console.log(result.text);

    });
    f.target.reset()
  };

  const { t } = useTranslation();


  const handleOnclick = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
    if (i18n && i18n.changeLanguage) {
      i18n.changeLanguage(e.target.value);
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{t("ProjectSubmissionTitle")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className='logo'>
          <h2>Paysages Meloche</h2>
        </div>
        <div className='services'>
          <div id='paysagement'>
            <h3>{t("Paysagement")}</h3>
          </div>
          <div id='pelouse'>
            <h3>{t("Pelouse")}</h3>
          </div>
          <div id='deneigement'>
            <h3>{t("Deneigement")}</h3>

          </div>
        </div>
        {Profile()}
        <div className='login'>
  

        </div>

      </header>
      <main>
        <h1 className={styles.title}>
          {t("Mailer")}

        </h1>
        <div className="container">
          <div className="card mt-5">
            <form className="card-body" action="/api/project/submission" method="POST"  ref={form} onSubmit={sendemail} >
                
            <div >
            <label ><strong>{t("Attach")}</strong></label>
              <input className="mb-6" type="file" name="my_file"/> 
              </div>
              
              <div className="form-group mb-3">
                <label className="mb-2"><strong>{t("FullName")}</strong></label>
                <input name="name" id="name" type="text" className="form-control" required />
              </div>


             
              <div className="form-group mb-3">
                <label className="mb-6"><strong>{t("Email")}</strong></label>
                <input name="email" id="email" type="text" className="form-control" required />
              </div>

              <div className="form-group mb-3">
                <label className="mb-2"><strong>{t("Subject")}</strong></label>
                <input name="subject" id="subject" type="text" className="form-control" required />
              </div>  

              <div className="form-group mb-3">
                <label className="mb-2"><strong>{t("Message")}</strong></label>
                <textarea name="message" id="message" type="text" className="form-control" required />
              </div>  
    
    
              <div className="d-grid mt-3">
                <button type="submit" className="btn btn-block btn-primary">Send</button>
              </div>
            </form>
          </div>
        </div>

        <p className={styles.description}>
          {t("Maintenance")}
        </p>
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
           
           .services div {
             display: flex;
             justify-content: center;
             width: 18vw;
             cursor: 'pointer';
           }
           .services div :hover {
             background-colour: red;
           }
           .logo{
             display: flex;
             justify-content: center;
             width: 15vw;
           }
           .label {
            cursor: pointer;
            border: 1px solid #cccccc;
            border-radius: 5px;
            padding: 5px 15px;
            margin: 5px;
            background: #dddddd;
            display: inline-block;
          }
          .mb-6:hover {
            background: #5cbd95;
          }
          .mb-6:active {
            background: #9fa1a0;
          }
          .mb-6:invalid+span {
            color: #000000;
          }
          .mb-6:valid+span {
            color: #ffffff;
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
           .d-grid mt-3, button{
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
           
           .mb-5 {
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
           .form-group mb-3, textarea, input{
               display: block;
               width: 100%;
               padding: .5rem .8rem .5rem .8rem;
               margin: .9vw 0 ;
               border:0;
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
  )
}

export const getServerSideProps = withPageAuthRequired({
  returnTo: '/project/submission',
  async getServerSideProps(ctx) {
    const client = await clientPromise;
    const db = client.db("FinalProject");
    const session = await getSession(ctx.req, ctx.res);

    const post = await db.collection("Client").findOne({
      email: session.user.name
    });
    // access the user session

    return { props: { data: JSON.parse(JSON.stringify(post)) } };
  }
});
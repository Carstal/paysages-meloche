import Head from 'next/head'
import styles from '../styles/Home.module.css';
import clientPromise from "../lib/mongodb";
import Profile from './profile';

import { withPageAuthRequired, getSession } from '@auth0/nextjs-auth0';
   
   export default function Project({ data }) {
       return (
           <div className={styles.container}>
           <Head>
             <title>Project Submission</title>
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
           {Profile()}  
           </header>
           <main>
             <h1 className={styles.title}>
               Project Submission
             </h1>
             <div className="container">
                   <div className="card mt-5">
                       <form className="card-body" action="/api/projectSubmissions" method="POST">
                       <input type="hidden" className="form-control" value={data?.email} id="email" name="email"/>

                          <div className="form-group mb-3">
                               <label className="mb-2"><strong>Name:</strong></label>
                               <input name="name" id="name" type="text" className="form-control" required/>
                           </div>

                           <div className="form-group mb-3">
                               <label className="mb-2"><strong>Project Type:</strong></label>
                               <input name="project" id="project"  type="text" className="form-control" required />
                           </div>
   
                           <div className="form-group mb-3">
                               <label className="mb-2"><strong>Length/Height:</strong></label>
                               <input name="length" id="length" type="text" className="form-control" required/>
                           </div>
                           <div className="form-group mb-3">
                               <label className="mb-2"><strong>Width:</strong></label>
                               <input name="width" id="width" type="text" className="form-control" required/>
                           </div>
   
                           <div className="form-group mb-3">
                               <label className="mb-2"><strong>Project:</strong></label>
                               <textarea name="description" id="description" type="text" className="form-control" required/>
                           </div>
   
                           <div className="d-grid mt-3">
                               <button type="submit" className="btn btn-block btn-primary">Submit</button>
                           </div>
                       </form>
                   </div>
               </div>
        
             <p className={styles.description}>
               Currently Under Maintenance
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
    returnTo: '/index',
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
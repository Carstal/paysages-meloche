import Head from 'next/head'
import styles from '../../styles/Home.module.css';
import clientPromise from "../../lib/mongodb";
import Profile from '../profile';
import {useRouter} from "next/router";

import { withPageAuthRequired, getSession } from '@auth0/nextjs-auth0';


   export default function DisplayProject({data}) {
    const router = useRouter()
       return (
           <div className={styles.container}>
           <Head>
             <title>Projects</title>
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
             <div className="containers">
                   <div className="card mt-5">
                    <div className="center-col">
                        <table>
                          <tr>
                           <th>Project</th>
                           <th>Description</th>
                          </tr>
                           {data.map((val, key) => {
                             return (
                               <tr key={key}>
                                  <nav>
                                  <a href="#" class="hover-underline-animation">
                                 <td onClick={() => router.push({
                                pathname: '/project/[id]', query: { id: val.project }})}>{val.project}</td>
                                 </a>
                                 </nav>
                                 <td>{val.description}</td>
                              </tr>
                            )
                         })}
        
                        </table>
                        </div>
                
               </div>
        
             <p className={styles.description}>
               Currently Under Maintenance
             </p>
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
           .center-col {
            flex: 1;
            overflow-y: scroll;
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
          nav{
            text-align: center;
            padding: 10px;
          }
          
          .hover-underline-animation {
            position: relative;
            color: #FFFFFF;
            text-decoration: none;
          }
          .hover-underline-animation:hover::after {
            transform: scaleX(1);
          }
          .hover-underline-animation::after{
            ...
            transform: scaleX(0);
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

      //Works with findOne
  
      const post = await db.collection("Project").find({}).toArray();
      // access the user session

      //console.log(post)
      
    
      const data = JSON.parse(JSON.stringify(post));

      console.log(data)
    
      return { props: {data} }
      

    
    }
    
  })


import React from "react";
import styles from "../../../../styles/Home.module.css"
// import Profile from './/profile/index';

// TODO: Add profile to nav
class Nav extends React.Component {
    render() {
    return(
    <header className={styles.NAV}>
        <div className={styles.logo}>
          <h2>Paysages Meloche</h2>
        </div>

        <div className={styles.services}>
          <div id='paysagement'>
            <h3>Paysagement</h3>
          </div>
          <div id='pelouse'>
            <h3>Pelouse</h3>
          </div>
          <div id='deneigement'>
            <h3>Deneigement</h3>
          </div>
          <div id='visit'
          onClick={() => router.push({pathname: '/visit'})}>
            <h3>Visits</h3>
          </div>
          <div id='calendar'
          onClick={() => router.push({pathname: '/calendar'})}>
            <h3>Calendar</h3>
          </div>
        </div>

    {/* {Profile()} */}
    </header>
    );
    }
}
export default function AdminNav(){
    return <Nav></Nav>;
}
// TODO: Default Nav

// TODO: Admin Nav

// TODO: User Nav
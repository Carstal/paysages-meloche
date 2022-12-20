//for auth
import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import styles from '../styles/Home.module.css';

export default function Profile() {
    const { user, error, isLoading } = useUser();
  
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
  
    if (user) {
    return (
      user && (
        <div>
        <img class={styles.profile} src={user.picture} alt={user.name}/>
          <button class={styles.loginbutton}>
          <a href="/api/auth/logout">Logout</a>
          </button>    
        </div>    
      )
    );
    } else {
        return (
        <button class={styles.loginbutton}>
          <a href="/api/auth/login">Login</a>
        </button> 
        )
    }
  }
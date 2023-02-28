import React from 'react'
import styles from './Login.module.css'
import { FaSpotify } from "react-icons/fa";

export default function Login() {
  return (
    <div className={styles.container}>
            <h1 className={styles.header}>
                <p className={styles.login}>
                </p>
                {/* <span className={styles.shadow}>Login</span>   */}
                <button> 
                    <FaSpotify className={styles.logo}size={90} />
                    <span className={styles.word}>Login to Spotify</span>
                </button>
            </h1>
    </div>
  )
}

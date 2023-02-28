import React from 'react'
import styles from './Login.module.css'

export default function Login() {
  return (
    <div className={styles.container}>
            <h1 className={styles.header}>
                <span>Graphify wants to login to Spotify</span>
                {/* <span className={styles.shadow}>Login</span>   */}
                <button>Login</button>
            </h1>
    </div>
  )
}

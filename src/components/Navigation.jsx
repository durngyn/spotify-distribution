import React from 'react'
import styles from './Navigation.module.css'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <div className={styles.nav}>
      <div className={styles["nav-left"]}>
        <span>Genres <span className={styles.name}>Graphify</span>'d!</span>
      </div>
      <div className={styles["nav-right"]}>
        <NavLink className={styles.button} to="/">
          <span className={styles.button}>Graph!</span>
        </NavLink>
        <NavLink className={styles.button} to="spotify-distribution/privacy-policy">
          <span className={styles.button}>Privacy Policy</span>
        </NavLink>
        <NavLink className={styles.button} to="spotify-distribution/callback">
          <span className={styles.button}>Callback</span>
        </NavLink>
      </div>
    </div>
  )
}

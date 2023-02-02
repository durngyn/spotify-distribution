import React from 'react'
import styles from './Navigation.module.css'

export default function Navigation() {
  return (
    <div className={styles.nav}>
      <div className={styles.navLeft}>
        <span>Genres <span className={styles.name}>Graphify</span>'d!</span>
      </div>
      <div className={styles.navRight}>
        <span className={styles.button}>Navigation</span>
        <span className={styles.button}>Navigation</span>
        <span className={styles.button}>Navigation</span>
        <span className={styles.button}>Navigation</span>
        <span className={styles.button}>Navigation</span>
      </div>
    </div>
  )
}

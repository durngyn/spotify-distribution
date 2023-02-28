import React from 'react'
import styles from './NullPage.module.css'
import { IoMusicalNoteOutline } from "react-icons/io5";
export default function NullPage() {
  return (
    <div className={styles.nullContainer}>
      <div className={styles.content}>
        <div className={styles.items}>
          <div className={styles.iconContainer}></div>
          <IoMusicalNoteOutline className={styles.iconOne} size={50}/>
          <span className={styles.text}>We could not find the page you're looking for!</span>
          <IoMusicalNoteOutline className={styles.iconTwo} size={50}/>
        </div>
      </div>
    </div>
  )
}

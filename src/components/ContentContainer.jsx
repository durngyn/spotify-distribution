import React from 'react'
import styles from './ContentContainer.module.css'

export default function ContentContainer() {
  return (
    <div className={styles.content}>
        <div className={styles["content-item"]}>Content</div>
        <div className={styles["content-item"]}>Content</div>
        <div className={styles["content-item"]}>Content</div>
        <div className={styles["content-item"]}>Content</div>
        <div className={styles["content-item"]}>Content</div>
    </div>
  )
}

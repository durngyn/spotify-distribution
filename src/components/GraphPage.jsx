import React from 'react'
import styles from './GraphPage.module.css'

export default function GraphPage() {
    return (
        <div>
            <div className={styles.content}>
                <div className={styles["content-item"]}>Content</div>
                <div className={styles["content-item"]}>Content</div>
                <div className={styles["content-item"]}>Content</div>
                <div className={styles["content-item"]}>Content</div>
                <div className={styles["content-item"]}><a href="http://localhost:8888/login">LOGIN</a></div>
            </div>
        </div>
    )
}

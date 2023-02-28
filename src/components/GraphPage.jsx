import React from 'react'
import styles from './GraphPage.module.css'

export default function GraphPage() {
    const x = ["A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D"]

    for (var i; i < 50; i++) {
        x.push("")
    }

    console.log(x)
    return (
        <div className={styles["page-container"]}>
            <div className={styles["playlist-container"]}>
                {x.map((item) => {
                    return <span>{item + " lorem lorem lorem lorem"}</span>
                })}
            </div>
            <div className={styles["graph-container"]}>
                <div className={styles.graph}>
                    <div className={styles.genres}>
                        <span>Genre</span>
                        <span>Genre</span>
                        <span>Genre</span>
                        <span>Genre</span>
                    </div>
                    <div className={styles.bars}>
                        <div className={styles.short}>25%</div>
                        <div className={styles.medium}>50%</div>
                        <div className={styles.long}>75%</div>
                        <div className={styles.short}>25%</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

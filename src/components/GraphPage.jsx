import React from 'react'
import CountUp from 'react-countup';import styles from './GraphPage.module.css'

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
                    return <span className={styles.playlist}>{item + " playlist item"}</span>
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
                        <div className={styles.short}><CountUp duration={1} end={25} />%</div>
                        <div className={styles.medium}><CountUp duration={1.5} end={50} />%</div>
                        <div className={styles.long}>Not currently using actual data</div>
                        <div className={styles.short}><CountUp duration={1} end={25} />%</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

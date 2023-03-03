import React, { useRef } from 'react'
import CountUp from 'react-countup';import styles from './GraphPage.module.css'

export default function GraphPage({ handleMouseEnter, handleMouseExit, handleBar }) {
    const x = ["A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D"]
    const graphRef = useRef(null)

    for (var i; i < 50; i++) {
        x.push("")
    }

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
                    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit} id="bar-graph" className={styles.bars}>
                        <div onMouseEnter={() => handleBar(1)} className={styles.short}><CountUp duration={1} end={25} />%</div>
                        <div onMouseEnter={() => handleBar(2)} className={styles.medium}><CountUp duration={1.5} end={50} />%</div>
                        <div onMouseEnter={() => handleBar(3)} className={styles.long}>Not currently using actual data</div>
                        <div onMouseEnter={() => handleBar(4)} className={styles.short}><CountUp duration={1} end={25} />%</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

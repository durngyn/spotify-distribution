import React from 'react'
import styles from './Songs.module.css'
import { useRef, useEffect } from 'react'

export default function Songs({ handleCancel, handleRef }) {
  const songRef = useRef(null)
  useEffect(() => {
    handleRef(songRef)
  }, [])
  return (
    <div ref={songRef} className={styles["songs-container"]}>
      <img onClick={handleCancel} className={styles.item1} src="https://media.npr.org/assets/img/2015/08/18/beachhouse_sq-73faed6c2ff32e823d28aed939d08b5043ce8565.jpg" />
      <img onClick={handleCancel} className={styles.item1} src="https://media.npr.org/assets/img/2015/08/18/beachhouse_sq-73faed6c2ff32e823d28aed939d08b5043ce8565.jpg" />
      <img onClick={handleCancel} className={styles.item1} src="https://media.npr.org/assets/img/2015/08/18/beachhouse_sq-73faed6c2ff32e823d28aed939d08b5043ce8565.jpg" />
      <img onClick={handleCancel} className={styles.item1} src="https://media.npr.org/assets/img/2015/08/18/beachhouse_sq-73faed6c2ff32e823d28aed939d08b5043ce8565.jpg" />
    </div>
  )
}

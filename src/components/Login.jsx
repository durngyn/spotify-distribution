import React from 'react'
import styles from './Login.module.css'
import { FaSpotify } from "react-icons/fa";
import { HiArrowsUpDown } from "react-icons/hi2";
import gr from '../images/gr.png'

export default function Login() {
  return (
    <div className={styles.container}>
                <div className={styles.login}>
                  <img className={styles.pic} src={gr}/>
                  <HiArrowsUpDown className={styles.pic2}size={80} />
                  <FaSpotify className={styles.pic3}size={90} />
                </div>  
                <h1 className={styles.header}>
                <button> 
                    <FaSpotify className={styles.logo}size={90} />
                    <span className={styles.word}>Login to Spotify</span>
                </button>
            </h1>
    </div>
  )
}

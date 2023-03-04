import React, { useEffect, useState } from 'react'
import styles from './Login.module.css'
import { FaSpotify } from "react-icons/fa";
import { CgArrowsExchange } from "react-icons/cg";
import gr from '../images/grwhite.png'
import axios from 'axios';
import authHelpers from './helpers/authorizationHelpers'

export default function Login() {
  const [url, setUrl] = useState("test")
  const [authPair, setAuthPair] = useState({
    verifier: "",
    challenge: ""
  })

  const handleLogin = () => {
    const verifier = authHelpers.generateCodeVerifier()

    authHelpers.createCodeChallenge(verifier)
      .then(challenge => {
        setAuthPair({
          verifier: verifier,
          challenge: challenge
        })
      })

  }

  useEffect(() => {
    console.log(authPair)
  }, [authPair])

  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <img className={styles.pic} src={gr} />
        <CgArrowsExchange className={styles.pic2} size={90} />
        <FaSpotify className={styles.pic3} size={90} />
      </div>
      <h1 className={styles.header}>
        <button onClick={handleLogin}>
          <FaSpotify className={styles.logo} size={90} />
          <span className={styles.word}>Login to Spotify</span>
        </button>
      </h1>
    </div>
  )
}

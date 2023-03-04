import React, { useEffect, useState } from 'react'
import styles from './Login.module.css'
import { FaSpotify } from "react-icons/fa";
import { CgArrowsExchange } from "react-icons/cg";
import gr from '../images/grwhite.png'
import axios from 'axios';
import authHelpers from './helpers/authorizationHelpers'

export default function Login() {
  const [url, setUrl] = useState("test")
  const [authParams, setAuthParams] = useState({
    verifier: "",
    challenge: "",
    state: ""
  })

  const handleLogin = () => {
    const verifier = authHelpers.generateCodeVerifier()
    const route = 'user/authorize'

    const login = () => {
      const options = {
        method: 'get',
        url: process.env.REACT_APP_URI + route,
        withCredentials: true,
        params: {
          code_challenge: authParams.challenge,
          auth_state: authParams.state
        }
      }
  
      axios(options)
        .then(data => console.log(data.data))
    }

    authHelpers.createCodeChallenge(verifier)
      .then(challenge => {
        setAuthParams({
          verifier: verifier,
          challenge: challenge,
          state: authHelpers.generateState()
        })
        
        login()
      })



    console.log(process.env.REACT_APP_URI)
  }

  useEffect(() => {
    console.log(authParams)
  }, [authParams])

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

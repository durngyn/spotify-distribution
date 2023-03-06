import React, { useEffect, useState } from 'react'
import useAxios from './hooks/useAxios';
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
  const [data, requestData] = useAxios()

  const handleLogin = () => {
    const verifier = authHelpers.generateCodeVerifier()

    authHelpers.createCodeChallenge(verifier)
      .then(challenge => {
        setAuthParams({
          verifier: verifier,
          challenge: challenge,
          state: authHelpers.generateState()
        })
      })
  }

  useEffect(() => {
    if (authParams.verifier !== '') {

      window.sessionStorage.setItem("code_verifier", authParams.verifier)
      window.sessionStorage.setItem("state", authParams.state)

      const options = {
        route: 'user/authorize',
        params: {
          code_challenge: authParams.challenge,
          auth_state: authParams.state
        }
      }

      requestData(options)
    }

    if (data.data) {
      window.location.replace(data.data)
    }
  }, [authParams, data.data])

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

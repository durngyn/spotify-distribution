import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'

export default function CallbackPage() {
    const [params, setParams] = useSearchParams();
    const [verification, setVerification] = useState(null)

    useEffect(() => {
        setVerification({
            code: params.get("code"),
            stateAfter: params.get("state")
        })

        params.delete("code")
        params.delete("state")
        setParams(params)
    }, [])

    useEffect(() => {
        if (verification !== null) {
            const code_verifier = window.sessionStorage.getItem("code_verifier")
            const stateBefore = window.sessionStorage.getItem("state")

            window.sessionStorage.removeItem("code_verifier")
            window.sessionStorage.removeItem("state")

            if (stateBefore === verification.stateAfter) {
                const route = 'user/exchange-code'

                const options = {
                    method: 'post',
                    url: process.env.REACT_APP_PROXY + route,
                    withCredentials: true,
                    data: {
                        code: verification.code,
                        code_verifier: code_verifier
                    }
                }

                axios(options)
                    .then(data => console.log({data: data}))
                    .catch(err => console.log({err: err}))
            } else {
                console.log("State mismatch, aborting request")
            }
        }
    }, [verification])

    return (
        <div>
            Callback
        </div>
    )
}

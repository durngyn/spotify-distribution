import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'
import { isDisabled } from '@testing-library/user-event/dist/utils';
import useAxios from './hooks/useAxios';

export default function CallbackPage() {
    const [params, setParams] = useSearchParams();
    const [verification, setVerification] = useState(null)
    const [isDone, setIsDone] = useState(false)
    const [data, requestData] = useAxios()

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
                const options = {
                    method: 'post',
                    route: 'user/exchange-code',
                    data: {
                        code: verification.code,
                        code_verifier: code_verifier
                    }
                }

                requestData(options)
            } else {
                console.log("State mismatch, aborting request")
            }
        }
    }, [verification])

    useEffect(() => {
        if (data.data === "success") {
            setIsDone(true)
        }
    }, [data.data])

    return (
        <div>
            {`Done: ${isDone}`}
        </div>
    )
}

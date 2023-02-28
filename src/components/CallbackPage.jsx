import React, { useState } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

export default function CallbackPage() {
    const [cookie, setCookie] = useState({
        "verifier": "",
        "challenge": ""
    })
    const handleClick = () => {
        console.log("click")
        const loginOptions = {
            withCredentials: true,
            method: 'get',
            url: "http://localhost:8888/login",
            params: {
                test: "test"
            },
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            }
        }

        axios(loginOptions)
            .then(data => {
                setCookie({
                    
                })
                console.log(cookies.get('challenge'))
                console.log(data.data)
                window.location.replace(`${data.data}`);
            })
    }

    return (
        <div onClick={handleClick}>
            Callback
        </div>
    )
}

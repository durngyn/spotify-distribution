import { useState } from "react"
import axios from "axios"

const useAxios = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const requestData = (options) => {
        const method = options.method ? options.method : 'get'
        const route = options.route ? options.route : 'default'
        const params = options.params ? options.params : {}
        const data = options.data ? options.data : {}
        const withCredentials = options.withCredentials ? options.withCredentials : true

        const axiosOptions = {
            method: method,
            url: process.env.REACT_APP_PROXY + route,
            withCredentials: withCredentials,
            params: params,
            data: data
        }

        setLoading(true)
        axios(axiosOptions)
            .then(res => {
                setData(res.data)
                setLoading(false)
            })
            .catch(err => {
                setError(err)
                setLoading(false)
            })
    }

    const res = {data: data, loading: loading, error: error}

    return [res, requestData]
}

export default useAxios

/*
    const route = 'user/authorize'

    const options = {
        method: 'get',
        url: process.env.REACT_APP_PROXY + route,
        withCredentials: false,
        params: {
            code_challenge: authParams.challenge,
            auth_state: authParams.state
        }
    }

    axios(options)
        .then(data => window.location.replace(data.data))

    ##########################

    const route = 'data/playlist-items'

    const options = {
        method: 'get',
        url: process.env.REACT_APP_PROXY + route,
        withCredentials: true,
        params: {
            playlist_id: id
        }
    }

    axios(options)
        .then(data => console.log("success"))

    ##############################

    const route = 'data/playlists'

    const options = {
        method: 'get',
        url: process.env.REACT_APP_PROXY + route,
        withCredentials: true
    }

    axios(options)
        .then(data => {
            setPlaylists(data.data)
        })
        .catch(err => console.log(err))

    ##################################

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
        .then(data => {
            if (data.data == "success") {
                setIsDone(true)
            }
        })
*/
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
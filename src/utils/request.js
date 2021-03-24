import axios from 'axios'

const request = axios.create({
    baseURL: "http://39.105.38.10:8081/"
})

export default request
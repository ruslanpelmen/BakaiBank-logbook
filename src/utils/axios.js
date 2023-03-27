import axios from 'axios'
import ServiceLinks from '../constants/ServiceLinks'

const axiosInstance = axios.create({
    baseURL: ServiceLinks.server,
})

axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token')
    return config
})

export default axiosInstance
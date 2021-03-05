import axios from 'axios'
import { getToken, removeToken } from './utils'
import config from './config'
const { api } = config

const axiosInstance = axios.create({
  baseURL: api.baseUrl,
})

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${getToken()}`
    return config
  },
  (error) => {
    console.log('token expired')
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(undefined, (error) => {
  const { status } = error.response

  if (status === 401) {
    console.log('unauthorized')
    removeToken()
  }
})

export default axiosInstance

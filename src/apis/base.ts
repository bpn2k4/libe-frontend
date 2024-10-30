import { API_URL } from '@configs'
import axios from 'axios'
import queryString from 'query-string'

const base = axios.create({
  baseURL: API_URL + '/api/v1',
  paramsSerializer: (params) => queryString.stringify(params),
  headers: {
    'Content-Type': 'application/json',
  },
})

base.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

base.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
)


export default base
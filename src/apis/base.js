import axios from 'axios'

import { API_BASE_URL, STATUS_CODE } from '~/configs'
import Util from '~/utils';

const base = axios.create({
  baseURL: `${API_BASE_URL}/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
})

base.interceptors.request.use((config) => {
  const accessToken = Util.global.accessToken;
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  console.log(config);
  return config;
})

base.interceptors.response.use(
  //Success
  response => {
    if (response.data) return response.data
    return response
  },
  //Fail
  /**@param {} error */
  async error => {
    if (!error.response) { }
    if (error.response && error.response.status == STATUS_CODE.UNAUTHENTICATED) {

    }
    if (error.response) {
      return error.response.data
    }
    return Promise.reject(error)
  }
)

export default base

// const baseURL = `${API_BASE_URL}/api/v1`

// const base = {
//   post: () => {

//   }
// }
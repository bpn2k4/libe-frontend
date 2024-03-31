import axios from 'axios'
import queryString from 'query-string';

import { API_BASE_URL, STATUS_CODE } from '~/configs'
import Util from '~/utils';

const base = axios.create({
  baseURL: `${API_BASE_URL}/api/v1`,
  paramsSerializer: params => queryString.stringify(params),
  headers: {
    'Content-Type': 'application/json',
  },
})

base.interceptors.request.use((config) => {
  const accessToken = Util.global.accessToken;
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  // Debug axios call API
  if (config.method == 'get') {
    console.log(
      '[AXIOS]-[SEND]', '\n',
      'Method: GET', '\n',
      `URL: ${config.baseURL}/${config.url}`, '\n',
      `Params:`, config.params
    )
  }
  if (config.method == 'post' || config.method == 'patch') {
    console.log('[AXIOS]-[SEND]', '\n',
      'Method: GET', '\n',
      `URL: ${config.baseURL}/${config.url}`, '\n',
      `Params:`, config.params, '\n',
      'Body:', config.data
    )
  }
  config.startTime = Util.getCurrentTime()
  return config
})

base.interceptors.response.use(
  // Success
  response => {
    const config = response.config
    if (config.method == 'get') {
      console.log(
        '[AXIOS]-[RESPONSE]', '\n',
        'Method: GET', '\n',
        `URL: ${config.baseURL}/${response.config.url}`, '\n',
        `Params:`, config.params, '\n',
        'Response:', response.data, '\n',
        `Start:  ${config.startTime}`, '\n',
        `Finish: ${Util.getCurrentTime()}`
      )
    }
    if (config.method == 'post' || config.method == 'patch') {
      console.log(
        '[AXIOS]-[RESPONSE]', '\n',
        'Method: GET', '\n',
        `URL: ${config.baseURL}/${response.config.url}`, '\n',
        'Params:', config.params, '\n',
        'Body:', config.data, '\n',
        'Response:', response.data, '\n',
        `Start:  ${config.startTime}`, '\n',
        `Finish: ${Util.getCurrentTime()}`
      )
    }
    if (response.data) return response.data
    return response
  },
  // Fail
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

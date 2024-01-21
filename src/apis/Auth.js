import base from "./base"

/**@type {import("~/types").AuthApi} */
const Auth = {

  register: (data) => {
    const url = `/auth/register`
    return base.post(url, data)
  },

  login: (data) => {
    const url = `/auth/login`
    return base.post(url, data)
  }

}

export default Auth
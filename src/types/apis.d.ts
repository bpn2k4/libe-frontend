import {
  User
} from './object'

type Response = {
  status: 'SUCCESS' | 'FAIL',
  error: String,
  errorCode: Number,
  code: Number,
  message: String
}

type LoginForm = {
  username: String,
  password: String
}

type RegisterForm = {
  username: String,
  password: String,
  fullName: String,
  password: String,
  phone?: String,
  email?: String
} | FormData
export type AuthApi = {

  login: (data: LoginForm) => Promise<Response & { user: User }>,

  register: (data: RegisterForm) => Promise<Response & { user: User }>,
}
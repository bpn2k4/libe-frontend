export * from './components'
export * from './apis'
export * from './hooks'

import { CSSProperties } from 'react'
import { Product } from './object'

export type utilities = {
  [key: string]: CSSProperties
}

export type AxiosError = {

}

type Users = {
  id: Number,
  name: String,
  age: Number,
  gender: String,
  email: String,
  address: String,
}
export type data = {
  products: Product[],
  users: Users[]
}
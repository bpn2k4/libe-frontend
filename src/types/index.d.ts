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

export type data = {
  products: Product[]
}
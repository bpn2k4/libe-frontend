import {
  User,
  Collection
} from './object'

type Response = {
  status: 'SUCCESS' | 'FAIL',
  result: 'SUCCESS' | 'FAIL',
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



type GetListCollectionParams = {
  page: Number,
  limit: Number
}

type CreateCollectionData = {
  name: String,
  color: String,
  description: String,
}

type UpdateCollectionData = {
  name: String,
  color: String,
  description: String,
}

export type CollectionApi = {
  createCollection: (data: CreateCollectionData) => Promise<Response & { collection: Collection }>,
  getProductInCollection: (collectionId) => Promise<Response & { user: User }>,
  updateCollection: (collectionId: Number, data: UpdateCollectionData) => Promise<Response & { collection: Collection }>,
  deleteCollection: (data) => Promise<Response & { user: User }>,
  getOneCollection: (params) => Promise<Response & { user: User }>,
  getListCollection: (params: GetListCollectionParams) => Promise<Response & { total: Number, collections: Collection[] }>,
}
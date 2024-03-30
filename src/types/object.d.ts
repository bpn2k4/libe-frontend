export type User = {
  userId: String,
  fullName: String,
  username: String,
  avatar?: String,
  phone?: String,
  phoneVerified: Boolean,
  email?: String,
  emailVerified: Boolean,
  accessToken?: String,
  refreshToken?: String
}

export type Product = {
  productId: Number,
  name: String,
  price: Number,
  images: String[]
}

export type Collection = {
  collectionId: Number,
  name: String,
  color: String,
  description: String,
  totalProduct: String,
  createdAt: String,
  updatedAt: String,
  deletedAt: String,
}
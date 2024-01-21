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
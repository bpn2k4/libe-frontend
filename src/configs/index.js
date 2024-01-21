const API_BASE_URL = window.API_BASE_URL ?? ''
export { API_BASE_URL }

export const TOKEN_EXPIRED = 'Token expired'

export const STATUS = {
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL'
}

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHENTICATED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,

  CONFLICT: 409,
  LOCKED: 423
}
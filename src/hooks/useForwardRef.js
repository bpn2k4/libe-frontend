import { useState } from 'react'

export const useForwardRef = () => {
  const [value, _] = useState({})
  return value
}
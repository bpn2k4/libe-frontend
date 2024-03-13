import { useDebounce } from "./useDebounce";

export const useDelay = (value, delay1 = 400, delay2 = 100) => {
  const slow = useDebounce(value, value ? 0 : delay1)
  const fast = useDebounce(value, value ? delay2 : 0)
  return [slow, fast]
}
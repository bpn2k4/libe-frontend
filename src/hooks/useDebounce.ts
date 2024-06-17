import { useEffect, useState } from 'react'

/**
 * useDebounce is a hook that debounces a given value.
 * @param {T} value - The value to be debounced.
 * @param {number} [delay=200] - The debounce delay in milliseconds. Defaults to 200ms if not provided.
 * 
 * @returns {T} - The debounced value.
 * 
 * @example
 * const [searchValue, setSearchValue] = useState("")
 * const debouncedSearchValue = useDebounce(searchValue, 500);
 * useEffect(() => { 
 *   callAPISeach()
 * }, [debouncedSearchValue])
 */
function useDebounce<T>(value: T, delay: number = 200): T {

  // State to hold the debounced value
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {

    // Set a timeout to update the debounced value after the specified delay
    const timeout = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // Clear the timeout if the value or delay changes to prevent unnecessary updates
    return () => {
      clearTimeout(timeout)
    }
  }, [value, delay])

  // Return the debounced value
  return debouncedValue
}

export default useDebounce

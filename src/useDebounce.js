import { useState, useEffect } from 'react';
/**
 * Custom hook for debouncing a value
 *
 * @param {any} value - The value to be debounced.
 * @param {Number} delay - The delay in milliseconds.
 *
 * @returns {any} The debounced value.
 */

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;

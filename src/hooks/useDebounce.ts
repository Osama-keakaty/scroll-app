import { useCallback, useRef } from 'react';

const useDebounce = (callback: (value: string) => void, delay: number) => {
  const timeoutRef = useRef<number | undefined>(undefined);

  return useCallback((value: string) => {
    if (timeoutRef.current !== undefined) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      callback(value);
    }, delay);
  }, [callback, delay]);
};

export default useDebounce;
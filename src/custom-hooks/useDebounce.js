import { useEffect, useRef } from 'react';

/**
 * useDebounce - Custom debounce hook
 * @param {Function} callback   - The function to debounce
 * @param {Array} dependencies  - Dependency list to watch
 * @param {number} delay        - Time to delay the callback
 */

const useDebounce = (callback, dependencies = [], delay = 1000) => {
    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        const handler = setTimeout(() => {
            callbackRef.current();
        }, delay);

        return () => clearTimeout(handler);
    }, [...dependencies, delay]);
};

export default useDebounce;

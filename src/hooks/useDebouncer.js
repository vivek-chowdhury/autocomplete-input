import { useEffect, useState } from "react";

export default function useDebouncer(fn, value, delay) {
    const [previousValue, setPreviousValue] = useState(value);

    useEffect(() => {
        const timerId = setTimeout(() => {
            clearTimeout(timerId);
            if(value !== previousValue) {
                fn(value);
                setPreviousValue(value);
            }
        }, delay);

        return () => {
            clearTimeout(timerId);
        }

    }, [fn, value, previousValue, delay]);
    return previousValue;
}
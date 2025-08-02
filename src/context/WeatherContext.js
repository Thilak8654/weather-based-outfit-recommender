import React, { createContext, useReducer } from 'react';
import { initialState, WeatherReducer } from './WeatherReducer';


export const WeatherContext = createContext();

export function WeatherProvider({ children }) {
    const [state, dispatch] = useReducer(WeatherReducer, initialState);

    React.useEffect(() => {
        const updateOnlineStatus = () =>
            dispatch({ type: "SET_OFFLINE", payload: !navigator.onLine });
        window.addEventListener("online", updateOnlineStatus);
        window.addEventListener("offline", updateOnlineStatus);
        return () => {
            window.removeEventListener("online", updateOnlineStatus);
            window.removeEventListener("offline", updateOnlineStatus);
        };
    }, []);

    return (
        <WeatherContext.Provider value={{ state, dispatch }}>
            {children}
        </WeatherContext.Provider>
    )
}
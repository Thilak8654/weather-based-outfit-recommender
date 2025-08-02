import React, {createContext, useReducer} from 'react';
import { WeatherReducer } from './WeatherReducer';


export const WeatherContext = createContext();

export function WeatherProvider({children}){
    const [state, dispatch] = useReducer(WeatherReducer);
    return (
        <WeatherContext.Provider value={{state, dispatch}}>
            {children}
        </WeatherContext.Provider>
    )
}
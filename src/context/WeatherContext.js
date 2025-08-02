import React, {createContext, useReducer} from 'react';
import { initialState, WeatherReducer } from './WeatherReducer';


export const WeatherContext = createContext();

export function WeatherProvider({children}){
    const [state, dispatch] = useReducer(WeatherReducer, initialState);
    return (
        <WeatherContext.Provider value={{state, dispatch}}>
            {children}
        </WeatherContext.Provider>
    )
}
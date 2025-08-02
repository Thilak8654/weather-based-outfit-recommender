
const initialState = {
    weather: null,
    error: null,
}

export function WeatherReducer(state, action){
    switch (action.type){
        case "SET_WEATHER":
            return {
                ...state,
                weather: action.payload,
                error: null,
                
            };
        case "SET_ERROR":
            return { ...state, error: action.payload, weather: null};
        default: 
            return state;
    }
}


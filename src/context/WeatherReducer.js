
export const initialState = {
    weather: null,
    error: null,
    history: []
}

export function WeatherReducer(state, action) {
    switch (action.type) {
          case "SET_WEATHER":
      return {
        ...state,
        weather: action.payload,
        error: null,
        history: [
          action.payload.name,
          ...state.history.filter((city) => city !== action.payload.name),
        ].slice(0, 5),
      };
        case "SET_ERROR":
            return { ...state, error: action.payload, weather: null };
        default:
            return state;
    }
}


import { WeatherActionTypes } from "./weather.types";

const INITIAL_STATE = {
  current: {
    data: [],
    isLoading: false,
    errorMessage: null,
  },
  forecast: {
    data: [],
    isLoading: false,
    errorMessage: null,
  },
};

export const weatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WeatherActionTypes.FETCH_WEATHER_START:
      return {
        ...state,
        current: {
          ...state.current,
          isLoading: true,
        },
      };
    case WeatherActionTypes.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        current: {
          isLoading: false,
          data: action.payload,
          errorMessage: null,
        },
      };
    case WeatherActionTypes.FETCH_WEATHER_FAILURE:
      return {
        ...state,
        current: {
          isLoading: false,
          data: [],
          errorMessage: action.payload,
        },
      };
    case WeatherActionTypes.FETCH_WEATHER_FORECAST_START:
      return {
        ...state,
        forecast: {
          ...state.forecast,
          isLoading: true,
        },
      };
    case WeatherActionTypes.FETCH_WEATHER_FORECAST_SUCCESS:
      return {
        ...state,
        forecast: {
          isLoading: false,
          data: action.payload,
          errorMessage: null,
        },
      };
    case WeatherActionTypes.FETCH_WEATHER_FORECAST_FAILURE:
      return {
        ...state,
        forecast: {
          isLoading: false,
          data: [],
          errorMessage: action.payload,
        },
      };
    default:
      return state;
  }
};

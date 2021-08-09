import { WeatherActionTypes } from "./weather.types";

export const fetchCurrentWeatherStart = () => ({
  type: WeatherActionTypes.FETCH_WEATHER_START,
});

export const fetchCurrentWeatherSuccess = (data) => ({
  type: WeatherActionTypes.FETCH_WEATHER_SUCCESS,
  payload: data,
});

export const fetchCurrentWeatherFailure = (error) => ({
  type: WeatherActionTypes.FETCH_WEATHER_FAILURE,
  payload: error.message,
});

export const fetchWeatherForecastStart = () => ({
  type: WeatherActionTypes.FETCH_WEATHER_FORECAST_START,
});

export const fetchWeatherForecastSuccess = (data) => ({
  type: WeatherActionTypes.FETCH_WEATHER_FORECAST_SUCCESS,
  payload: data,
});

export const fetchWeatherForecastFailure = (error) => ({
  type: WeatherActionTypes.FETCH_WEATHER_FORECAST_FAILURE,
  payload: error.message,
});

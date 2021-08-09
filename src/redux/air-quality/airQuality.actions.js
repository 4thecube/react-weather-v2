import { AirQualityTypes } from "./airQuality.types";

export const fetchAirQualityStart = () => ({
  type: AirQualityTypes.FETCH_AIR_QUALITY_START,
});

export const fetchAirQualitySuccess = (data) => ({
  type: AirQualityTypes.FETCH_AIR_QUALITY_SUCCESS,
  payload: data,
});

export const fetchAirQualityFailure = (error) => ({
  type: AirQualityTypes.FETCH_AIR_QUALITY_FAILURE,
  payload: error.message,
});

export const fetchAirQualityForecastStart = () => ({
  type: AirQualityTypes.FETCH_AIR_QUALITY_FORECAST_START,
});

export const fetchAirQualityForecastSuccess = (data) => ({
  type: AirQualityTypes.FETCH_AIR_QUALITY_FORECAST_SUCCESS,
  payload: data,
});

export const fetchAirQualityForecastFailure = (error) => ({
  type: AirQualityTypes.FETCH_AIR_QUALITY_FORECAST_FAILURE,
  payload: error.message,
});

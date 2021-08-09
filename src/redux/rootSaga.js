import { all, call } from "redux-saga/effects";
import {
  fetchCurrentWeatherStart,
  fetchWeatherForecastStart,
} from "./weather/weather.sagas";
import {
  fetchAirQualityDataStart,
  fetchAirQualityDataForecastStart,
} from "./air-quality/airQuality.sagas";

export function* rootSaga() {
  yield all([
    call(fetchCurrentWeatherStart),
    call(fetchWeatherForecastStart),
    call(fetchAirQualityDataStart),
    call(fetchAirQualityDataForecastStart),
  ]);
}

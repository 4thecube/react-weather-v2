import { takeLatest, call, put, select } from "redux-saga/effects";
import axios from "axios";

import {
  fetchCurrentWeatherSuccess,
  fetchCurrentWeatherFailure,
  fetchWeatherForecastSuccess,
  fetchWeatherForecastFailure,
} from "./weather.actions";

import { WeatherActionTypes } from "./weather.types";

import { selectCity } from "../user-input/userInput.selectors";

const CURRENT_WEATHER_URL = process.env.REACT_APP_CURRENT_WEATHER_URL;
const WEATHER_FORECAST_URL = process.env.REACT_APP_WEATHER_FORECAST_URL;
const KEY = process.env.REACT_APP_KEY;

export function* fetchCurrentWeatherAsync() {
  const getCityFromState = yield select(selectCity);
  try {
    const data = yield call(
      axios.get,
      CURRENT_WEATHER_URL + getCityFromState + KEY
    );
    yield put(fetchCurrentWeatherSuccess(data.data.data));
  } catch (error) {
    yield put(fetchCurrentWeatherFailure(error));
  }
}

export function* fetchCurrentWeatherStart() {
  yield takeLatest(
    WeatherActionTypes.FETCH_WEATHER_START,
    fetchCurrentWeatherAsync
  );
}

export function* fetchWeatherForecastAsync() {
  const getCityFromState = yield select(selectCity);
  try {
    const data = yield call(
      axios.get,
      WEATHER_FORECAST_URL + getCityFromState + "&days=6" + KEY
    );
    yield put(fetchWeatherForecastSuccess(data.data.data));
  } catch (error) {
    yield put(fetchWeatherForecastFailure(error));
  }
}

export function* fetchWeatherForecastStart() {
  yield takeLatest(
    WeatherActionTypes.FETCH_WEATHER_FORECAST_START,
    fetchWeatherForecastAsync
  );
}

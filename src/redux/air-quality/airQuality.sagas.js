import { takeLatest, call, put, select } from "redux-saga/effects";
import axios from "axios";

import {
  fetchAirQualitySuccess,
  fetchAirQualityFailure,
  fetchAirQualityForecastSuccess,
  fetchAirQualityForecastFailure,
} from "./airQuality.actions";

import { AirQualityTypes } from "./airQuality.types";

import { selectCity } from "../user-input/userInput.selectors";

const AIR_QUALITY_URL = process.env.REACT_APP_AIR_QUALITY_URL;
const AIR_QUALITY_URL_FORECAST = process.env.REACT_APP_AIR_QUALITY_FORECAST_URL;
const KEY = process.env.REACT_APP_KEY;

export function* fetchAirQualityAsync() {
  const getCityFromState = yield select(selectCity);
  try {
    const data = yield call(
      axios.get,
      AIR_QUALITY_URL + getCityFromState + KEY
    );
    yield put(fetchAirQualitySuccess(data.data.data));
  } catch (error) {
    yield put(fetchAirQualityFailure(error));
  }
}

export function* fetchAirQualityDataStart() {
  yield takeLatest(
    AirQualityTypes.FETCH_AIR_QUALITY_START,
    fetchAirQualityAsync
  );
}

export function* fetchAirQualityForecastAsync() {
  const getCityFromState = yield select(selectCity);
  try {
    const data = yield call(
      axios.get,
      AIR_QUALITY_URL_FORECAST + getCityFromState + KEY
    );
    yield put(fetchAirQualityForecastSuccess(data.data.data));
  } catch (error) {
    yield put(fetchAirQualityForecastFailure(error));
  }
}

export function* fetchAirQualityDataForecastStart() {
  yield takeLatest(
    AirQualityTypes.FETCH_AIR_QUALITY_FORECAST_START,
    fetchAirQualityForecastAsync
  );
}

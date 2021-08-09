import { combineReducers } from "redux";
import { airQualityReducer } from "./air-quality/airQuality.reducer";
import { userInputReducer } from "./user-input/userInput.reducer";
import { weatherReducer } from "./weather/weather.reducer";

export const rootReducer = combineReducers({
  weather: weatherReducer,
  airQuality: airQualityReducer,
  city: userInputReducer,
});

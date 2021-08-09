import { createSelector } from "reselect";

const weatherSelector = (state) => state.weather;

export const selectCurrentWeather = createSelector(
  [weatherSelector],
  (currentWeather) => currentWeather.current
);

export const selectWeatherForecast = createSelector(
  [weatherSelector],
  (weatherForecast) => weatherForecast.forecast
);

export const selectCurrentWeatherLocation = createSelector(
  [selectCurrentWeather],
  (data) =>
    data.data
      ? data.data[0]
        ? {
            lon: data.data[0].lon,
            lat: data.data[0].lat,
            name: data.data[0].city_name,
          }
        : { lon: 0, lat: 0 }
      : []
);

export const selectCurrentSunriseAndSunset = createSelector(
  [selectCurrentWeather],
  (data) => {
    return {
      sunrise: data.data[0].sunrise,
      sunset: data.data[0].sunset,
    };
  }
);

export const selectCurrentVisibility = createSelector(
  [selectCurrentWeather],
  (data) => (data.data ? (data.data[0] ? data.data[0].vis : 0) : 0)
);

export const selectCurrentAiq = createSelector([selectCurrentWeather], (data) =>
  data.data ? (data.data[0] ? data.data[0].aqi : 0) : []
);

export const selectCurrentUltravioletIndex = createSelector(
  [selectCurrentWeather],
  (data) => (data.data ? (data.data[0] ? data.data[0].uv.toFixed(1) : 0) : [])
);

export const selectCurrentHumidity = createSelector(
  [selectCurrentWeather],
  (data) => Math.floor(data.data[0].rh)
);

export const selectCurrentWeatherDate = createSelector(
  [selectCurrentWeather],
  (data) =>
    data?.data[0]
      ? new Date(data.data[0].ob_time)
          .toLocaleString("en", {
            weekday: "long",
          })
          .charAt(0)
          .toUpperCase() +
        new Date(data.data[0].ob_time)
          .toLocaleString("en", {
            weekday: "long",
          })
          .slice(1) +
        ", " +
        new Date(data.data[0].ob_time).toLocaleString("en", {
          day: "numeric",
        }) +
        " " +
        new Date(data.data[0].ob_time)
          .toLocaleString("en", {
            month: "long",
          })
          .charAt(0)
          .toLowerCase() +
        new Date(data.data[0].ob_time)
          .toLocaleString("en", {
            month: "long",
          })
          .slice(1)
      : null
);

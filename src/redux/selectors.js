import { createSelector } from "reselect";

const citySelector = (state) => state.city;
const stateSelector = (state) => state;

export const selectCity = createSelector([citySelector], (city) => city.city);

export const selectBigFatRedError = createSelector([stateSelector], (state) =>
  state.weather.current.errorMessage ||
  state.weather.forecast.errorMessage ||
  state.airQuality.forecast.errorMessage ||
  state.airQuality.current.errorMessage
    ? "We get an error."
    : null
);

export const selectWhereTheFuckIsData = createSelector(
  [stateSelector],
  (state) =>
    !state.weather.current.data ||
    !state.weather.forecast.data ||
    !state.airQuality.forecast.data ||
    !state.airQuality.current.data
      ? "We have lost some data. Or you, fucking baboon, typed gibberish in the search field."
      : null
);

export const selectIsLoading = createSelector([stateSelector], (state) =>
  state.weather.current.isLoading ||
  state.weather.forecast.isLoading ||
  state.airQuality.forecast.isLoading ||
  state.airQuality.current.isLoading
    ? true
    : false
);

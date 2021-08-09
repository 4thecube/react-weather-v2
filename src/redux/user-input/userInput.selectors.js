import { createSelector } from "reselect";

const citySelector = (state) => state.city;

export const selectCity = createSelector([citySelector], (city) => city.city);

import { AirQualityTypes } from "./airQuality.types";

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

export const airQualityReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AirQualityTypes.FETCH_AIR_QUALITY_START:
      return {
        ...state,
        current: { ...state.current, isLoading: true },
      };
    case AirQualityTypes.FETCH_AIR_QUALITY_SUCCESS:
      return {
        ...state,
        current: { data: action.payload, isLoading: false, errorMessage: null },
      };
    case AirQualityTypes.FETCH_AIR_QUALITY_FAILURE:
      return {
        ...state,
        current: {
          data: [],
          isLoading: false,
          errorMessage: action.payload,
        },
      };
    case AirQualityTypes.FETCH_AIR_QUALITY_FORECAST_START:
      return {
        ...state,
        forecast: {
          ...state.forecast,
          isLoading: true,
        },
      };
    case AirQualityTypes.FETCH_AIR_QUALITY_FORECAST_SUCCESS:
      return {
        ...state,
        forecast: {
          isLoading: false,
          data: action.payload,
          errorMessage: null,
        },
      };
    case AirQualityTypes.FETCH_AIR_QUALITY_FORECAST_FAILURE:
      return {
        ...state,
        forecast: {
          data: [],
          isLoading: false,
          errorMessage: action.payload,
        },
      };
    default:
      return state;
  }
};

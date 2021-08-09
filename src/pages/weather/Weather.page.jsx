import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import {
  selectCurrentAiq,
  selectCurrentUltravioletIndex,
  selectCurrentWeather,
  selectCurrentWeatherLocation,
  selectCurrentVisibility,
} from "../../redux/weather/weather.selectors";

import {
  selectBigFatRedError,
  selectIsLoading,
  selectWhereTheFuckIsData,
} from "../../redux/selectors";

import CurrentWeather from "../../components/current-weather/CurrentWeather.component";
import CurrentWind from "../../components/current-wind/CurrentWind.component";
import CurrentSunriseSunset from "../../components/current-sunrise-sunset/CurrentSunriseSunset.component";
import CurrentHumidity from "../../components/current-humidity/CurrentHumidity.component";
import CurrentData from "../../components/current-data-block/CurrentData.component";
import ForecastWeather from "../../components/forecast-weather/ForecastWeather.component";
import Search from "../../components/search/Search.component";
import Map from "../../components/map/Map.component";
import Error from "../../components/error/Error.component";
import Loader from "../../components/loader/Loader.component";

import {
  handleAirQualityIndexDescription,
  handleUltravioletIndexDescription,
} from "../../utils";
import {
  fetchCurrentWeatherStart,
  fetchWeatherForecastStart,
} from "../../redux/weather/weather.actions";
import {
  fetchAirQualityStart,
  fetchAirQualityForecastStart,
} from "../../redux/air-quality/airQuality.actions";
import { userInputCity } from "../../redux/user-input/userInput.actions";

import "./Weather.styles.scss";

const WeatherPage = ({
  currentWeather,
  airQualityIndex,
  ultravioletIndex,
  visibility,
  error,
  isNoData,
  isLoading,
  coordinates,
  fetchCurrentWeatherStart,
  fetchWeatherForecastStart,
  fetchAirQualityStart,
  fetchAirQualityForecastStart,
  searchCity,
}) => {
  const [isRedirectable, setRedirectable] = useState(false);
  const match = useRouteMatch();
  useEffect(() => {
    guarder();
    console.log(match.params.city);
    if (match.params.city && !currentWeather.data?.length) {
      searchCity(match.params.city);
      fetch();
    }
  }, []);

  const guarder = () => {
    setTimeout(() => {
      if (
        currentWeather.data === undefined ||
        currentWeather.data.length <= 0
      ) {
        setRedirectable(true);
      }
    }, 4000);
  };

  const fetch = () => {
    fetchCurrentWeatherStart();
    fetchAirQualityStart();
    fetchAirQualityForecastStart();
    fetchWeatherForecastStart();
  };

  // піздєц, це ж максимально нечитабельно
  // сорі
  return (
    <div className="weather-page">
      {isLoading ? (
        <Loader />
      ) : error || isNoData ? (
        <Error
          error={error}
          isNoData={isNoData}
          isRedirectable={isRedirectable}
        />
      ) : currentWeather.data.length ? (
        <>
          <div className="left-container">
            <div className="weather-map-search">
              <div className="search">
                <Search fetch={fetch} />
              </div>
              <CurrentWeather />
              <Map coordinates={coordinates} />
            </div>
          </div>
          <div className="extended-info">
            <h2 className="title">WEEK</h2>
            <ForecastWeather />
            <h2 className="title">TODAY'S HIGHLIGHT</h2>
            <div className="current-data-blocks">
              <CurrentWind />
              <CurrentSunriseSunset />
              <CurrentHumidity />
              <CurrentData
                hasIcon
                title="UV Index"
                data={ultravioletIndex}
                handle={handleUltravioletIndexDescription}
              />
              <CurrentData
                hasIcon
                title="AQ Index"
                data={airQualityIndex}
                handle={handleAirQualityIndexDescription}
              />
              <CurrentData title="Visibility" data={visibility} measure="km" />
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentWeather: selectCurrentWeather,
  airQualityIndex: selectCurrentAiq,
  ultravioletIndex: selectCurrentUltravioletIndex,
  visibility: selectCurrentVisibility,
  coordinates: selectCurrentWeatherLocation,
  error: selectBigFatRedError,
  isNoData: selectWhereTheFuckIsData,
  isLoading: selectIsLoading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrentWeatherStart: () => dispatch(fetchCurrentWeatherStart()),
  fetchWeatherForecastStart: () => dispatch(fetchWeatherForecastStart()),
  fetchAirQualityStart: () => dispatch(fetchAirQualityStart()),
  fetchAirQualityForecastStart: () => dispatch(fetchAirQualityForecastStart()),
  searchCity: (city) => dispatch(userInputCity(city)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherPage);

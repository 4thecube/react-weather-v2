import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchCurrentWeatherStart,
  fetchWeatherForecastStart,
} from "./redux/weather/weather.actions";
import {
  fetchAirQualityStart,
  fetchAirQualityForecastStart,
} from "./redux/air-quality/airQuality.actions";

import { userInputCity } from "./redux/user-input/userInput.actions";

import SearchPage from "./pages/search/Search.page";
import WeatherPage from "./pages/weather/Weather.page";

import "./App.scss";

function App({
  fetchCurrentWeatherStart,
  fetchWeatherForecastStart,
  fetchAirQualityStart,
  fetchAirQualityForecastStart,
}) {
  const fetch = () => {
    fetchCurrentWeatherStart();
    fetchAirQualityStart();
    fetchAirQualityForecastStart();
    fetchWeatherForecastStart();
  };

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <SearchPage fetch={fetch} />
        </Route>
        <Route exact path="/weather">
          <Redirect to="/" />
        </Route>
        <Route exact path="/weather/:city">
          <WeatherPage />
        </Route>
      </Switch>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchCurrentWeatherStart: () => dispatch(fetchCurrentWeatherStart()),
  fetchWeatherForecastStart: () => dispatch(fetchWeatherForecastStart()),
  fetchAirQualityStart: () => dispatch(fetchAirQualityStart()),
  fetchAirQualityForecastStart: () => dispatch(fetchAirQualityForecastStart()),
  userInputCity: (city) => dispatch(userInputCity(city)),
});

export default connect(null, mapDispatchToProps)(App);

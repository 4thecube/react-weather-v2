import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCurrentWeather,
  selectCurrentWeatherDate,
} from "../../redux/weather/weather.selectors";

import "./CurrentWeather.styles.scss";

const CurrentWeather = ({ currentWeather, selectCurrentWeatherDate }) => {
  const data = currentWeather.data[0];
  const [icon, setIcon] = useState("c02d.svg");
  const [background, setBackground] = useState("c-day");

  const iconSetter = () => {
    setIcon(data.weather.icon);
  };

  const backgroundSetter = () => {
    if (data.weather.icon.split("")[0] === "r") {
      return "c-rain";
    } else if (data.weather.icon.split("").pop() === "d") return "c-day";
    else if (data.weather.icon.split("").pop() === "n") return "c-night";
    else return "fuck";
  };

  useEffect(() => {
    iconSetter();
    setBackground(backgroundSetter());
  }, []);
  return (
    <div className={`${background} current-weather`}>
      <div className="c-weather-info">
        <div className="c-weather-data">
          <span className="c-weather-description">
            {data.weather.description}
          </span>
          <span className="c-weather-temperature">
            {Math.floor(data.temp)}
            <span className="c-weather-temperature-degree">°</span>
          </span>
        </div>
        <div className="c-weather-location">
          <span>{selectCurrentWeatherDate}</span>
          <span>
            {data.city_name}, {data.country_code}
          </span>
        </div>
      </div>
      <div className="c-weather-image">
        <div className="c-background-image">
          <img
            className="c-bg-img"
            src={`${window.location.origin}/images/${icon}.svg`}
            alt="background"
          />
        </div>
        <img
          className="c-weather-img"
          alt="weather-icon"
          src={`${window.location.origin}/images/${icon}.svg`}
        />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentWeather: selectCurrentWeather,
  selectCurrentWeatherDate: selectCurrentWeatherDate,
});

export default connect(mapStateToProps)(CurrentWeather);

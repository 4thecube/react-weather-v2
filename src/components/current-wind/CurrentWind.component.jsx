import React, { useEffect, useState } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./CurrentWind.styles.scss";

import marker from "../../assets/marker.svg";
import { selectCurrentWeather } from "../../redux/weather/weather.selectors";

const CurrentWind = ({ currentWeather }) => {
  const data = currentWeather.data[0];
  const [direction, setDirection] = useState("");
  const cutDirection = _.take(data.wind_cdir.split(""), 2).join("");
  const rotator = () => {
    switch (cutDirection) {
      case "E":
        return "rotate-90";
      case "EE":
        return "rotate-90";
      case "EN":
        return "rotate-135";
      case "ES":
        return "rotate-45";
      case "N":
        return "rotate180";
      case "NN":
        return "rotate180";
      case "NW":
        return "rotate135";
      case "NE":
        return "rotate225";
      case "W":
        return "rotate90";
      case "WW":
        return "rotate90";
      case "WS":
        return "rotate45";
      case "WN":
        return "rotate135";
      case "S":
        return "do-not-rotate";
      case "SS":
        return "do-not-rotate";
      case "SE":
        return "rotate-45";
      case "SW":
        return "rotate45";
      default:
        return "oh-shit";
    }
  };

  useEffect(() => {
    setDirection(rotator);
  }, [cutDirection]);

  return (
    <div className="current-wind block">
      <div className="c-wind-title">Wind Status</div>
      <div className="c-wind-data">
        {data.wind_spd.toFixed(2)}
        <span className="c-wind-measure">km/h</span>
      </div>
      <div className="c-wind-direction">
        <div className="c-wind-direction-icon">
          <img
            className={`${direction} c-wind-marker `}
            alt="wind direction"
            src={marker}
          />
        </div>
        <div className="c-wind-direction-data">{data.wind_cdir}</div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentWeather: selectCurrentWeather,
});

export default connect(mapStateToProps)(CurrentWind);

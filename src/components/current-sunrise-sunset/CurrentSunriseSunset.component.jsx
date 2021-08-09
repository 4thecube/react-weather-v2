import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import "./CurrentSunriseSunset.styles.scss";

import sunriseIcon from "../../assets/sunrise.svg";
import sunsetIcon from "../../assets/sunset.svg";
import { selectCurrentSunriseAndSunset } from "../../redux/weather/weather.selectors";

const CurrentSunriseSunset = ({ sunriseAndSunset }) => {
  const { sunrise, sunset } = sunriseAndSunset;
  return (
    <div className="current-sunrise-sunset block">
      <div className="c-ss-title">Sunrise & Sunset</div>
      <div className="c-ss-sunrise">
        <div className="c-ss-field">
          <img className="icon" alt="sunrise icon" src={sunriseIcon} />
          <span className="c-ss-data">{sunrise}</span>
        </div>
      </div>
      <div className="c-ss-sunset">
        <div className="c-ss-field">
          <img className="icon" alt="sunrise icon" src={sunsetIcon} />
          <span className="c-ss-data">{sunset}</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sunriseAndSunset: selectCurrentSunriseAndSunset,
});

export default connect(mapStateToProps)(CurrentSunriseSunset);

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentAiq } from "../../redux/weather/weather.selectors";

import { handleDescription } from "./currentairQualityIndex.utils";

import "./CurrentAirQualityIndex.styles.scss";
import info from "../../assets/info.svg";

const CurrentAirQualityIndex = ({ currentAirQualityIndex }) => {
  const [description, setDescription] = useState({});

  useEffect(() => {
    setDescription(handleDescription(currentAirQualityIndex));
  }, []);

  return (
    <div className="current-air-quality block">
      <div className="c-aq-title">Air Quality Index</div>
      <div className="c-aq-data">
        <div className="c-aq-value-container">
          <div className="c-aq-value">{currentAirQualityIndex}</div>
          <div className="c-aq-description">{description.short}</div>
        </div>
        <div description={description.long} className="c-aq-info-icon">
          <img alt="info-icon" className="info" src={info} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentAirQualityIndex: selectCurrentAiq,
});

export default connect(mapStateToProps)(CurrentAirQualityIndex);

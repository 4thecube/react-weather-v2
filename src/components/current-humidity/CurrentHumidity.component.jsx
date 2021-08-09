import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentHumidity } from "../../redux/weather/weather.selectors";

import "./CurrentHumidity.styles.scss";

const CurrentHumidity = ({ humidity }) => {
  const additionalClass =
    humidity < 40 ? "low" : humidity > 65 ? "hight" : "normal";
  const humidityDescription =
    humidity < 40 ? "Too low" : humidity > 65 ? "Too hight" : "Normal";
  return (
    <div className="current-humidity block">
      <div className="c-h-title">Humidity</div>
      <div className="c-h-data">
        <div className="c-h-value-container">
          <div className="c-h-value">
            {humidity}
            <span className="c-h-measure"> %</span>
          </div>
          <div className="c-h-description">{humidityDescription}</div>
        </div>
        <div className="c-h-progress">
          <strong
            className={`${additionalClass}  bar`}
            style={{ height: humidity + "%" }}
          ></strong>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  humidity: selectCurrentHumidity,
});

export default connect(mapStateToProps)(CurrentHumidity);

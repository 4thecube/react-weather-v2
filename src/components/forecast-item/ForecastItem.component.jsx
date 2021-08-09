import React from "react";

import "./ForecastItem.styles.scss";

const ForecastItem = ({
  date,
  image,
  description,
  highTemperature,
  lowTemperature,
}) => {
  return (
    <div className="forecast-item">
      <div className="f-i-date">
        {new Date(date).toLocaleString("en", { weekday: "long" })}
      </div>
      <div className="f-i-icon" image-description={description}>
        <img
          alt="weather icon"
          src={`${window.location.origin}/images/${image}.svg`}
        />
      </div>
      <div className="f-i-temp">
        <span className="high-temp">
          {Math.floor(highTemperature)}
          <span>°</span>
        </span>
        <span className="low-temp">
          {Math.floor(lowTemperature)}
          <span>°</span>
        </span>
      </div>
    </div>
  );
};

export default ForecastItem;

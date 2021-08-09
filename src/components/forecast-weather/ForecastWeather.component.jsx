import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectWeatherForecast } from "../../redux/weather/weather.selectors";
import ForecastItem from "../forecast-item/ForecastItem.component";

import "./ForecastWeather.styles.scss";

const ForecastWeather = ({ forecast }) => {
  return (
    <div className="forecast">
      {forecast.data ? (
        forecast.data.map((weather) => (
          <ForecastItem
            key={weather.moonrise_ts}
            date={weather.valid_date}
            image={weather.weather.icon}
            description={weather.weather.description}
            highTemperature={weather.high_temp}
            lowTemperature={weather.low_temp}
          />
        ))
      ) : (
        <h2>Loading..</h2>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  forecast: selectWeatherForecast,
});

export default connect(mapStateToProps)(ForecastWeather);

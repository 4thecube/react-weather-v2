export const handleUltravioletIndexDescription = (ultravioletIndex) => {
  switch (true) {
    case ultravioletIndex <= 2:
      return {
        short: "Low",
        long: "A ultravioletIndex index reading of 0 to 2 means low danger from the Sun's ultravioletIndex rays for the average person.",
      };
    case ultravioletIndex > 2 && ultravioletIndex <= 5:
      return {
        short: "Moderate",
        long: "A ultravioletIndex index reading of 3 to 5 means moderate risk of harm from unprotected sun exposure.",
      };
    case ultravioletIndex >= 6 && ultravioletIndex <= 7:
      return {
        short: "High",
        long: "A ultravioletIndex index reading of 6 to 7 means high risk of harm from unprotected sun exposure. Protection against skin and eye damage is needed.",
      };
    case ultravioletIndex >= 8 && ultravioletIndex <= 10:
      return {
        short: "Very high",
        long: "A ultravioletIndex index reading of 8 to 10 means very high risk of harm from unprotected sun exposure. Take extra precautions because unprotected skin and eyes will be damaged and can burn quickly.",
      };
    case ultravioletIndex >= 11:
      return {
        short: "Extreme",
        long: "A ultravioletIndex index reading of 11 or more means extreme risk of harm from unprotected sun exposure. Take all precautions because unprotected skin and eyes can burn in minutes.",
      };
    default:
      return {
        short: "Error",
        description: "Oh, nooo...",
      };
  }
};

export const handleAirQualityIndexDescription = (airQualityIndex) => {
  switch (true) {
    case airQualityIndex <= 50:
      return {
        short: "Good",
        long: "Air quality is satisfactory, and air pollution poses little or no risk.",
      };
    case airQualityIndex > 50 && airQualityIndex <= 100:
      return {
        short: "Moderate",
        long: "Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution.",
      };
    case airQualityIndex >= 101 && airQualityIndex <= 150:
      return {
        short: "Unhealthy for Sensitive Groups",
        long: "Members of sensitive groups may experience health effects. The general public is less likely to be affected.",
      };
    case airQualityIndex >= 151 && airQualityIndex <= 200:
      return {
        short: "Unhealthy",
        long: "Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects.",
      };
    case airQualityIndex >= 201 && airQualityIndex <= 300:
      return {
        short: "Very Unhealthy",
        long: "Health alert: The risk of health effects is increased for everyone.",
      };
    case airQualityIndex >= 301:
      return {
        short: "Hazardous",
        long: "Health warning of emergency conditions: everyone is more likely to be affected.",
      };
    default:
      return {
        short: "Error",
        description: "Oh, nooo...",
      };
  }
};

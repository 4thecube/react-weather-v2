export const handleDescription = (airQualityIndex) => {
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
        short: "Fuck it",
      };
  }
};

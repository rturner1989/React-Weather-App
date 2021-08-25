import React from "react";

const HourlyForecastCard = ({ hourlyWeatherData }) => {
    return (
        <div>
            <p>{hourlyWeatherData.daily[0].weather.main}</p>
            <p></p>
            <p></p>
        </div>
    );
};

export default HourlyForecastCard;

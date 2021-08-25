import React from "react";

const HourlyForecastCard = ({ hourlyWeatherData }) => {
    return (
        <div>
            <p className="daily-weather-info">
                {new Date(
                    hourlyWeatherData.list[0].dt * 1000
                ).toLocaleTimeString("en-GB", { timeZoneName: "short" })}
            </p>
        </div>
    );
};

export default HourlyForecastCard;

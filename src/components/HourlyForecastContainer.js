import React from "react";
import { useGlobalContext } from "../Context";
import HourlyForecastCard from "./HourlyForecastCard";

const HourlyForecastContainer = () => {
    const { hourlyWeatherData } = useGlobalContext();
    return (
        <div id="hourly-weather-forecast">
            {hourlyWeatherData.map((item, index) => {
                return (
                    <HourlyForecastCard key={index} hourlyWeatherData={item} />
                );
            })}
        </div>
    );
};

export default HourlyForecastContainer;

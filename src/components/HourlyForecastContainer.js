import React from "react";
import { useGlobalContext } from "../Context";
import HourlyForecastCard from "./HourlyForecastCard";

const HourlyForecastContainer = () => {
    const {} = useGlobalContext();
    return (
        <div id="hourly-weather-forecast">
            <HourlyForecastCard />
            <HourlyForecastCard />
            <HourlyForecastCard />
            <HourlyForecastCard />
            <HourlyForecastCard />
        </div>
    );
};

export default HourlyForecastContainer;

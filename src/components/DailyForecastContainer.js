import React from "react";
import { useGlobalContext } from "../context";
import DailyForecastCard from "./DailyForecastCard";

const DailyForecastContainer = () => {
    const { currentForecast } = useGlobalContext();

    return (
        <div id="daily-weather-forecast">
            {currentForecast &&
                currentForecast.daily.map((day, index) => {
                    if (index !== 0) {
                        return <DailyForecastCard key={day.id} day={day} />;
                    }
                })}
        </div>
    );
};

export default DailyForecastContainer;

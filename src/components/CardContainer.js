import React from "react";
import { useGlobalContext } from "../context";

import WeatherCard from "./WeatherCard";

const CardContainer = () => {
    const { weatherData } = useGlobalContext();
    return (
        <div id="weather-data-container">
            {weatherData.length !== 0 ? (
                weatherData.map((item, index) => {
                    return (
                        <WeatherCard
                            key={index}
                            index={index}
                            weatherData={item.city}
                        />
                    );
                })
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default CardContainer;

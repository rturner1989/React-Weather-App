import React from "react";
import { useGlobalContext } from "../Context";
import WeatherCard from "./WeatherCard";

const CardContainer = () => {
    const { weatherData } = useGlobalContext();
    return (
        <div>
            {weatherData.length != 0 ? (
                weatherData.map((item, index) => {
                    return <WeatherCard key={index} weatherData={item} />;
                })
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default CardContainer;

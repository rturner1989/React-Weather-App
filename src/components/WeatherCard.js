import React from "react";
import { useGlobalContext } from "../Context";

const WeatherCard = ({ weatherData, index }) => {
    const { updateCurrentForecast } = useGlobalContext();

    const words = weatherData.weather[0].description;
    const replace = words.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
        letter.toUpperCase()
    );

    return (
        <div
            id={weatherData.id}
            className="weather-card"
            onClick={() => updateCurrentForecast(index)}
        >
            <h3>{weatherData.name}</h3>
            <p className="weather-info">Time: {weatherData.time}</p>
            <hr />
            <img
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                alt="weather icon"
            />
            <p className="weather-info">{replace}</p>
            <p className="weather-info">
                {Math.round(weatherData.main.temp)}&deg;C
            </p>
            <hr />
            <p className="weather-info">
                Humidity: {weatherData.main.humidity}%
            </p>
            <p className="weather-info">
                Sunset:{" "}
                {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
                    "en-GB"
                )}
                pm
            </p>
        </div>
    );
};

export default WeatherCard;

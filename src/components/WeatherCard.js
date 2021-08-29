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
            <div className="weather-info">
                <h3>{weatherData.name}</h3>
                <p>Time: {weatherData.time}</p>
            </div>
            <div className="weather-info">
                <img
                    src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                    alt="weather icon"
                />
                <p>{replace}</p>
                <p>{Math.round(weatherData.main.temp)}&deg;C</p>
            </div>
            <div className="weather-info">
                <p>Humidity: {weatherData.main.humidity}%</p>
                <p>
                    Sunset:{" "}
                    {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
                        "en-GB"
                    )}
                    pm
                </p>
            </div>
        </div>
    );
};

export default WeatherCard;

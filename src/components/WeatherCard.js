import React from "react";
import { useGlobalContext } from "../context";
import { FiSunset } from "react-icons/fi";
import { WiHumidity } from "react-icons/wi";

const WeatherCard = ({ weatherData, index, position }) => {
    const { updateCurrentForecast } = useGlobalContext();

    const words = weatherData.weather[0].description;
    const replace = words.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
        letter.toUpperCase()
    );

    return (
        <div
            id={weatherData.id}
            className={`${
                position ? `weather-card ${position}` : "weather-card"
            }`}
            tabIndex="0"
            onClick={() => updateCurrentForecast(index)}
            onKeyUp={() => updateCurrentForecast(index)}
        >
            <div className="weather-info">
                <h3 id="weather-header">
                    {weatherData.name}{" "}
                    <span id="weather-country">{weatherData.sys.country}</span>
                </h3>
                <p id="weather-date">{weatherData.date}</p>
                <p id="weather-time">{weatherData.time}</p>
            </div>
            <div className="weather-info" id="weather-temp-info">
                <img
                    id="weather-img"
                    src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                    alt="weather icon"
                    role="presentation"
                />
                <p id="weather-description">{replace}</p>
                <p id="weather-temp">
                    {Math.round(weatherData.main.temp)}&deg;C
                </p>
            </div>
            <div className="weather-info">
                <p id="weather-humidity">
                    <span>Humidity:</span>
                    <span id="humidity-data">{weatherData.main.humidity}%</span>
                    <span className="icon" id="humidity-icon">
                        <WiHumidity aria-hidden={true} focusable={false} />
                    </span>
                </p>
                <p id="weather-sunset">
                    <span>Sunset: </span>
                    <span>
                        {new Date(
                            weatherData.sys.sunset * 1000
                        ).toLocaleTimeString("en-GB")}
                        pm
                    </span>
                    <span className="icon" id="sunset-icon">
                        <FiSunset aria-hidden={true} focusable={false} />
                    </span>
                </p>
            </div>
        </div>
    );
};

export default WeatherCard;

import React from "react";
import moment from "moment";

const WeatherCard = ({ weatherData }) => {
    return (
        <div id={weatherData.id} className="weather-card">
            <h3>{weatherData.name}</h3>
            <hr />
            <img
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                alt="weather icon"
            />
            <p className="weather-info">{weatherData.weather[0].description}</p>
            <hr />
            <p className="weather-info">
                Temperature: {weatherData.main.temp}&deg;C
            </p>
            <p className="weather-info">
                Humidity: {weatherData.main.humidity}%
            </p>
            <p className="weather-info">Time: {moment().format("LTS")}</p>
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

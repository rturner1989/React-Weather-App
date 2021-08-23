import React from "react";
import moment from "moment";
import { Card } from "semantic-ui-react";

const WeatherCard = ({ weatherData }) => {
    return (
        <Card id={weatherData.id}>
            <Card.Content>
                <Card.Header>Name: {weatherData.name}</Card.Header>
                <img
                    src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                    alt="weather icon"
                />
                <p className="weather-info">
                    Description: {weatherData.weather[0].description}
                </p>
                <p className="weather-info">
                    Temperature: {weatherData.main.temp}&deg;C
                </p>
                {/* <p className="weather-info">
                    Sunrise:{" "}
                    {new Date(
                        weatherData.sys.sunrise * 1000
                    ).toLocaleTimeString("en-GB")}
                    am
                </p>
                <p className="weather-info">
                    Sunset:{" "}
                    {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
                        "en-GB"
                    )}
                    pm
                </p> */}
                <p className="weather-info">
                    Humidity: {weatherData.main.humidity}%
                </p>

                <p className="weather-info">Day: {moment().format("dddd")}</p>
                <p className="weather-info">Date: {moment().format("LL")}</p>
            </Card.Content>
        </Card>
    );
};

export default WeatherCard;

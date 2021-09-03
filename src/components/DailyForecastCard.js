import React from "react";
import { WiHumidity } from "react-icons/wi";

const DailyForecastCard = ({ day }) => {
    const words = day.weather[0].description;
    const replace = words.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
        letter.toUpperCase()
    );

    return (
        <div className="forecast-card">
            <div className="forecast-weather-info" id="forecast-temp-info">
                <h4 id="forecast-header">
                    {new Date(day.dt * 1000).toLocaleDateString("en-GB")}
                </h4>
                <img
                    id="forecast-img"
                    src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                    alt="forecast weather icon"
                    role="presentation"
                />
                <p id="forecast-description">{replace}</p>
            </div>
            <p id="forecast-humidity">
                <span>Humidity:</span>
                <span id="forecast-humidity-data">{day.humidity}%</span>
                <span className="icon" id="forecast-humidity-icon">
                    <WiHumidity aria-hidden={true} focusable={false} />
                </span>
            </p>
            <table className="forecast-weather-info">
                <tbody>
                    <tr>
                        <td></td>
                        <th>Temp</th>
                        <th>Feels Like</th>
                    </tr>
                    <tr>
                        <th>Morning</th>
                        <td>{Math.round(day.temp.morn)}&deg;C</td>
                        <td>{Math.round(day.feels_like.morn)}&deg;C</td>
                    </tr>
                    <tr>
                        <th>Afternoon</th>
                        <td>{Math.round(day.temp.day)}&deg;C</td>
                        <td>{Math.round(day.feels_like.day)}&deg;C</td>
                    </tr>
                    <tr>
                        <th>Evening</th>
                        <td>{Math.round(day.temp.eve)}&deg;C</td>
                        <td>{Math.round(day.feels_like.eve)}&deg;C</td>
                    </tr>
                    <tr>
                        <th>Night</th>
                        <td>{Math.round(day.temp.night)}&deg;C</td>
                        <td>{Math.round(day.feels_like.night)}&deg;C</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default DailyForecastCard;

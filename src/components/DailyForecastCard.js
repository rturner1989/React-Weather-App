import React from "react";

const DailyForecastCard = ({ day }) => {
    return (
        <div className="forecast-card">
            <h4 className="daily-weather-info">
                {new Date(day.dt * 1000).toLocaleDateString("en-GB")}
            </h4>
            <img
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                alt="weather icon"
            />
            <p className="forecast-info">{day.weather[0].description}</p>
            <p className="forecast-info"> Min {day.temp.min}&deg;C</p>
            <p className="forecast-info"> Max {day.temp.max}&deg;C</p>
            <table>
                <tr>
                    <td></td>
                    <td>Temp</td>
                    <td>Feels Like</td>
                </tr>
                <tr>
                    <td>Morning</td>
                    <td>{day.temp.morn}&deg;C</td>
                    <td>{day.feels_like.morn}&deg;C</td>
                </tr>
                <tr>
                    <td>Afternoon</td>
                    <td>{day.temp.day}&deg;C</td>
                    <td>{day.feels_like.day}&deg;C</td>
                </tr>
                <tr>
                    <td>Evening</td>
                    <td>{day.temp.eve}&deg;C</td>
                    <td>{day.feels_like.eve}&deg;C</td>
                </tr>
                <tr>
                    <td>Night</td>
                    <td>{day.temp.night}&deg;C</td>
                    <td>{day.feels_like.night}&deg;C</td>
                </tr>
            </table>
        </div>
    );
};

export default DailyForecastCard;

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
            {/* <p className="forecast-info">Morning {day.temp.morn}&deg;C</p>
            <p className="forecast-info">Afternoon {day.temp.day}&deg;C</p>
            <p className="forecast-info">Evening {day.temp.eve}&deg;C</p>
            <p className="forecast-info">Night {day.temp.night}&deg;C</p> */}
        </div>
    );
};

export default DailyForecastCard;

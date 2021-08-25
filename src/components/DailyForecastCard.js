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
            <p className="weather-info">Morning {day.temp.morn}&deg;C</p>
            <p className="weather-info">Afternoon {day.temp.day}&deg;C</p>
            <p className="weather-info">Evening {day.temp.eve}&deg;C</p>
            <p className="weather-info">Night {day.temp.night}&deg;C</p>
        </div>
    );
};

export default DailyForecastCard;

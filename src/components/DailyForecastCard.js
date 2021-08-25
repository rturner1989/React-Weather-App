import React from "react";

const DailyForecastCard = ({ day }) => {
    return (
        <div>
            <p className="daily-weather-info">
                {new Date(day.dt * 1000).toLocaleDateString("en-GB")}
            </p>
        </div>
    );
};

export default DailyForecastCard;

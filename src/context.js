import React, { useContext, useState } from "react";
import moment from "moment";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState([]);
    const [currentForecast, setCurrentForecast] = useState(null);

    const getCityData = async (cityName) => {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=91d2f9efc77a289707cbc8c106b46727`
        );
        if (response.status !== 404) {
            const city = await response.json();
            const forecast = await getDailyForecast(
                city.coord.lon,
                city.coord.lat
            );
            if (!weatherData.find((c) => c.city.id === city.id)) {
                setWeatherData([
                    ...weatherData,
                    {
                        city: { ...city, time: moment().format("LTS") },
                        forecast,
                    },
                ]);
            }
        } else {
            alert("Error - Invalid Location Entered");
        }
    };

    const getDailyForecast = async (long, lat) => {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,minutely,hourly,alerts&units=metric&appid=91d2f9efc77a289707cbc8c106b46727`
        );
        const data = await response.json();
        return data;
    };

    const getLocation = () => {
        return new Promise((resolve, rejection) => {
            navigator.geolocation.getCurrentPosition(resolve, rejection);
        });
    };

    const getLongLatData = async () => {
        const position = await getLocation();
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=91d2f9efc77a289707cbc8c106b46727`
        );
        if (response.status !== 404) {
            const city = await response.json();
            const forecast = await getDailyForecast(longitude, latitude);
            if (!weatherData.find((c) => c.city.id === city.id)) {
                setWeatherData([
                    ...weatherData,
                    {
                        city: { ...city, time: moment().format("LTS") },
                        forecast,
                    },
                ]);
            }
        }
    };

    const updateCurrentForecast = (index) => {
        setCurrentForecast(weatherData[index].forecast);
    };

    return (
        <AppContext.Provider
            value={{
                weatherData,
                currentForecast,
                getCityData,
                getLongLatData,
                getLocation,
                setCurrentForecast,
                updateCurrentForecast,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
export const useGlobalContext = () => {
    return useContext(AppContext);
};

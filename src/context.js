import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState([]);
    const [hourlyWeatherData, setHourlyWeatherData] = useState([]);
    const [city, setCity] = useState("");

    const getLocation = () => {
        return new Promise((resolve, rejection) => {
            navigator.geolocation.getCurrentPosition(resolve, rejection);
        });
    };

    const getCityData = async () => {
        const response = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=91d2f9efc77a289707cbc8c106b46727`
        );
        if (response.status !== 404) {
            const data = await response.json();
            setWeatherData([...weatherData, data]);
            console.log(data);
        } else {
            alert("Error - Invalid Location Entered");
        }
    };

    const getHourlyCityData = async () => {
        const position = await getLocation();
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=,minutely,hourly&units=metric&appid=91d2f9efc77a289707cbc8c106b46727`
        );
        const data = await response.json();
        setHourlyWeatherData([...hourlyWeatherData, data]);
        console.log(data);
    };

    const getLongLatData = async () => {
        const position = await getLocation();
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const response = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=91d2f9efc77a289707cbc8c106b46727`
        );
        const data = await response.json();
        setWeatherData([...weatherData, data]);
        console.log(data);
    };

    return (
        <AppContext.Provider
            value={{
                weatherData,
                hourlyWeatherData,
                city,
                setCity,
                getCityData,
                setHourlyWeatherData,
                getLongLatData,
                getLocation,
                getHourlyCityData,
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

import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [long, setLong] = useState([]);
    const [lat, setLat] = useState([]);
    const [weatherData, setWeatherData] = useState([]);
    const [city, setCity] = useState("");

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        });
    };

    const getWeatherData = async () => {
        const response = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&q=${city}&units=metric&appid=91d2f9efc77a289707cbc8c106b46727`
        );
        const data = await response.json();
        setWeatherData([...weatherData, data]);
        console.log(data);
    };

    return (
        <AppContext.Provider
            value={{ weatherData, city, setCity, getWeatherData, getLocation }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
export const useGlobalContext = () => {
    return useContext(AppContext);
};

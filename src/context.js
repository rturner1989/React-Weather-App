import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [long, setLong] = useState([]);
    const [lat, setLat] = useState([]);
    const [weatherData, setWeatherData] = useState([]);
    const [city, setCity] = useState("");

    const cityURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=91d2f9efc77a289707cbc8c106b46727`;
    const longLatURL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=91d2f9efc77a289707cbc8c106b46727`;

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        });
    };

    const getCityData = async () => {
        const response = await fetch(cityURL);
        const data = await response.json();
        setWeatherData([...weatherData, data]);
        console.log(data);
    };
    const getLongLatData = async () => {
        const response = await fetch(longLatURL);
        const data = await response.json();
        setWeatherData([...weatherData, data]);
        console.log(data);
    };

    useEffect(() => {
        getLocation();
    }, []);

    return (
        <AppContext.Provider
            value={{
                weatherData,
                city,
                setCity,
                getCityData,
                getLongLatData,
                getLocation,
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

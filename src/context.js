import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState([]);
    const [city, setCity] = useState("");
    const [currentForecast, setCurrentForecast] = useState(null);

    const getCityData = async () => {
        const response = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=91d2f9efc77a289707cbc8c106b46727`
        );
        if (response.status !== 404) {
            const data = await response.json();
            return data;
        } else {
            alert("Error - Invalid Location Entered");
        }
    };

    const getHourlyCityData = async () => {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=91d2f9efc77a289707cbc8c106b46727`
        );
        const data = await response.json();
        return data;
    };

    const getCompleteCityData = async () => {
        const city = await getCityData();
        const forecast = await getHourlyCityData();
        setWeatherData([...weatherData, { city, forecast }]);
    };

    const updateCurrentForecast = (index) => {
        setCurrentForecast(weatherData[index].forecast);
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
            `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=91d2f9efc77a289707cbc8c106b46727`
        );
        const data = await response.json();
        setWeatherData([...weatherData, { data }]);
        console.log(data);
    };

    return (
        <AppContext.Provider
            value={{
                weatherData,
                city,
                currentForecast,
                setCity,
                getLongLatData,
                getLocation,
                getCompleteCityData,
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

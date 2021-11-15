import React, { useContext, useState } from "react";
import moment from "moment";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState([]);
    const [currentForecast, setCurrentForecast] = useState(null);

    const makeid = () => {
        let text = "";
        let possible =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 16; i++)
            text += possible.charAt(
                Math.floor(Math.random() * possible.length)
            );
        return text;
    };
    const getCityData = async (cityName) => {
        const response = await fetch(
            `https://turner-weather-api.herokuapp.com/weather/current?q=${cityName}&units=metric`
        );
        if (response.status !== 404) {
            const data = await response.json();
            const city = data.results;
            const forecast = await getDailyForecast(
                city.coord.lon,
                city.coord.lat
            );
            console.log(city);
            if (!weatherData.find((c) => c.city.id === city.id)) {
                setWeatherData([
                    ...weatherData,
                    {
                        city: {
                            ...city,
                            date: moment().format("LL"),
                            time: moment().format("LTS"),
                        },
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
            `https://turner-weather-api.herokuapp.com/weather/forecast?lat=${lat}&lon=${long}&exclude=current,minutely,hourly,alerts&units=metric`
        );
        const data = await response.json();
        const daily = [...data.results.daily];
        daily[1].id = makeid();
        daily[2].id = makeid();
        daily[3].id = makeid();
        daily[4].id = makeid();
        daily[5].id = makeid();
        daily[6].id = makeid();
        daily[7].id = makeid();
        return { ...data, daily };
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
            `https://turner-weather-api.herokuapp.com/weather/current?lat=${latitude}&lon=${longitude}&units=metric`
        );
        if (response.status !== 404) {
            const data = await response.json();
            const city = data.results;
            const forecast = await getDailyForecast(longitude, latitude);
            if (!weatherData.find((c) => c.city.id === city.id)) {
                setWeatherData([
                    ...weatherData,
                    {
                        city: {
                            ...city,
                            date: moment().format("LL"),
                            time: moment().format("LTS"),
                        },
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

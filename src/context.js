import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [long, setLong] = useState();
    const [lat, setLat] = useState();
    const [data, setData] = useState([]);

    // const handleFormSubmit = (e) => {
    //     e.preventDefault();
    // };

    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });

            await fetch(
                `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=91d2f9efc77a289707cbc8c106b46727`
            )
                .then((res) => res.json())
                .then((result) => {
                    setData(result);
                    console.log(result);
                });
        };
        fetchData();
    }, [lat, long]);

    return (
        <AppContext.Provider value={{ data }}>{children}</AppContext.Provider>
    );
};

export { AppContext, AppProvider };
export const useGlobalContext = () => {
    return useContext(AppContext);
};

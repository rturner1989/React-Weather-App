import React from "react";
import { useGlobalContext } from "../Context";

const SearchMenu = () => {
    const { setCity, getWeatherData } = useGlobalContext();
    return (
        <form>
            <input
                type="text"
                placeholder="Search for a City"
                onChange={(e) => setCity(e.target.value)}
            />
            <button
                type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    getWeatherData();
                }}
            >
                Submit
            </button>
            <button
                type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    getWeatherData();
                }}
            >
                Current Location
            </button>
        </form>
    );
};

export default SearchMenu;

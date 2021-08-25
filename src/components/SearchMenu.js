import React from "react";
import { useGlobalContext } from "../Context";
import { GrLocation } from "react-icons/gr";

const SearchMenu = () => {
    const { city, setCity, getCityData, getLongLatData, getHourlyCityData } =
        useGlobalContext();
    return (
        <form id="location-searchbar">
            <input
                id="location-input"
                type="text"
                placeholder="Search for a location"
                onChange={(e) => setCity(e.target.value)}
            />
            <button
                id="search-btn"
                type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    getCityData();
                }}
                disabled={city === "" ? true : false}
            >
                Submit
            </button>
            <button
                id="current-location-btn"
                type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    getLongLatData();
                }}
            >
                <GrLocation />
            </button>
            <button
                id="hourly-weather-btn"
                type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    getHourlyCityData();
                }}
            >
                hourly
            </button>
        </form>
    );
};

export default SearchMenu;

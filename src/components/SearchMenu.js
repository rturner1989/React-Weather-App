import React from "react";
import { useGlobalContext } from "../Context";
import { GrLocation } from "react-icons/gr";

const SearchMenu = () => {
    const { city, setCity, getLongLatData, getCompleteCityData } =
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
                    getCompleteCityData();
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
        </form>
    );
};

export default SearchMenu;

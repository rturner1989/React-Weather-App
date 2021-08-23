import React from "react";
import { useGlobalContext } from "../Context";
import { GrLocation } from "react-icons/gr";

const SearchMenu = () => {
    const { setCity, getCityData, getLongLatData } = useGlobalContext();
    return (
        <form id="location-searchbar">
            <input
                id="location-input"
                type="text"
                placeholder="Search for a City"
                onChange={(e) => setCity(e.target.value)}
            />
            <button
                id="search-btn"
                type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    getCityData();
                }}
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

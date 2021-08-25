import React, { useState } from "react";
import { useGlobalContext } from "../Context";
import { GrLocation } from "react-icons/gr";

const SearchMenu = () => {
    const [cityName, setCityName] = useState("");

    const { getLongLatData, getCityData } = useGlobalContext();

    return (
        <form id="location-searchbar">
            <input
                id="location-input"
                type="text"
                placeholder="Search for a location"
                onChange={(e) => setCityName(e.target.value)}
            />
            <button
                id="search-btn"
                type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    getCityData(cityName);
                }}
                disabled={cityName === "" ? true : false}
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

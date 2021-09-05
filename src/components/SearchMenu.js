import React, { useState } from "react";
import { useGlobalContext } from "../context";
import { MdLocationSearching } from "react-icons/md";

const SearchMenu = () => {
    const { getLongLatData, getCityData } = useGlobalContext();
    const [cityName, setCityName] = useState("");

    return (
        <form id="location-searchbar">
            <div className="location-bar">
                <label htmlFor="location-input" className="hidden-label">
                    Location Input
                </label>
                <input
                    id="location-input"
                    type="text"
                    value={cityName}
                    placeholder="Search for a location"
                    onChange={(e) => {
                        setCityName(e.target.value);
                    }}
                    tabIndex="0"
                />
                <label htmlFor="search-btn" className="hidden-label">
                    Search Button
                </label>
                <button
                    id="search-btn"
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        getCityData(cityName);
                        setCityName("");
                    }}
                    disabled={cityName === "" ? true : false}
                >
                    Submit
                </button>
                <label htmlFor="current-location-btn" className="hidden-label">
                    Current Location Button
                </label>
                <button
                    id="current-location-btn"
                    onClick={(e) => {
                        e.preventDefault();
                        getLongLatData();
                    }}
                >
                    <MdLocationSearching
                        id="location-icon"
                        aria-hidden={true}
                        focusable={false}
                    />
                </button>
            </div>
        </form>
    );
};

export default SearchMenu;

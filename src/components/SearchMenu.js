import React, { useState } from "react";
import { useGlobalContext } from "../context";
import { GrLocation } from "react-icons/gr";

const SearchMenu = () => {
    const { getLongLatData, getCityData } = useGlobalContext();
    const [cityName, setCityName] = useState("");

    return (
        <form id="location-searchbar">
            <div className="location-bar">
                <input
                    id="location-input"
                    type="text"
                    value={cityName}
                    placeholder="Search for a location"
                    aria-label="location search menu with two buttons"
                    onChange={(e) => {
                        setCityName(e.target.value);
                    }}
                />
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
                <button
                    id="current-location-btn"
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        getLongLatData();
                    }}
                >
                    <GrLocation
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

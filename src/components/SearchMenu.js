import React, { useState, useRef } from "react";
import { useGlobalContext } from "../context";
import { GrLocation } from "react-icons/gr";

const SearchMenu = () => {
    const { getLongLatData, getCityData } = useGlobalContext();
    const [cityName, setCityName] = useState("");

    return (
        <div id="location-searchbar">
            <form className="location-bar">
                <input
                    id="location-input"
                    type="text"
                    value={cityName}
                    placeholder="Search for a location"
                    onChange={(e) => {
                        setCityName(e.target.value);
                    }}
                />
                <div>
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
                        <GrLocation />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchMenu;

import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

import WeatherCard from "./WeatherCard";

const CardContainer = () => {
    const { weatherData } = useGlobalContext();

    const [windowDimensions, setWindowDimensions] = useState({});
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const getWindowDimensions = () => {
        const { innerWidth: width, innerHeight: height } = window;
        return { width, height };
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions(getWindowDimensions());
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        setCurrentCardIndex(weatherData.length - 1);
    }, [weatherData]);

    if (weatherData.length === 0) {
        return (
            <div id="weather-data-container">
                <div></div>
            </div>
        );
    }
    if (windowDimensions.width <= 450 || windowDimensions.width <= 900) {
        return (
            <div id="weather-data-container">
                {weatherData.map((item, index) => {
                    const position =
                        index < currentCardIndex
                            ? "previous-card"
                            : index > currentCardIndex
                            ? "next-card"
                            : "active-card";
                    return (
                        <WeatherCard
                            key={item.city.id}
                            index={index}
                            weatherData={item.city}
                            position={position}
                        />
                    );
                })}
                <label htmlFor="prev-btn" className="hidden-label">
                    Previous Weather Card
                </label>
                <button
                    id="prev-btn"
                    type="button"
                    className="prev-next-btn"
                    onClick={() => {
                        if (currentCardIndex > 0) {
                            setCurrentCardIndex(currentCardIndex - 1);
                        }
                    }}
                >
                    <BiLeftArrow
                        className="btn-icon"
                        id="prev-btn-icon"
                        aria-hidden={true}
                        focusable={false}
                    />
                </button>
                <label htmlFor="next-btn" className="hidden-label">
                    Next Weather Card
                </label>
                <button
                    type="button"
                    id="next-btn"
                    className="prev-next-btn"
                    onClick={() => {
                        if (currentCardIndex < weatherData.length - 1) {
                            setCurrentCardIndex(currentCardIndex + 1);
                        }
                    }}
                >
                    <BiRightArrow
                        className="btn-icon"
                        id="next-btn-icon"
                        aria-hidden={true}
                        focusable={false}
                    />
                </button>
            </div>
        );
    }

    return (
        <div id="weather-data-container">
            {weatherData.map((item, index) => {
                return (
                    <WeatherCard
                        key={item.city.id}
                        index={index}
                        weatherData={item.city}
                    />
                );
            })}
        </div>
    );
};

export default CardContainer;

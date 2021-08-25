import React from "react";
import CardContainer from "./components/CardContainer";
import SearchMenu from "./components/SearchMenu";
import HourlyForecastContainer from "./components/HourlyForecastContainer";

const App = () => {
    return (
        <div id="app-container">
            <SearchMenu />
            <CardContainer />
            <HourlyForecastContainer />
        </div>
    );
};

export default App;

import React from "react";
import CardContainer from "./components/CardContainer";
import SearchMenu from "./components/SearchMenu";
import DailyForecastContainer from "./components/DailyForecastContainer";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
    return (
        <div id="app-container">
            <SearchMenu />
            <CardContainer />
            <DailyForecastContainer />
        </div>
    );
};

export default App;

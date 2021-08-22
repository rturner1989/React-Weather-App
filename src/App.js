import React from "react";
import SearchMenu from "./components/SearchMenu";
import CardContainer from "./components/CardContainer";

const App = () => {
    return (
        <div id="app-container">
            <h1>React Weather App</h1>
            <SearchMenu />
            <CardContainer />
        </div>
    );
};

export default App;

import React from "react";
import CardContainer from "./components/CardContainer";
import SearchMenu from "./components/SearchMenu";

const App = () => {
    return (
        <div id="app-container">
            <SearchMenu />
            <CardContainer />
        </div>
    );
};

export default App;

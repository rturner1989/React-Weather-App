import React from "react";
import Weather from "./components/Weather";
import { useGlobalContext } from "./Context";

const App = () => {
    const { data } = useGlobalContext();
    return (
        <div id="app-container">
            {typeof data.main != "undefined" ? (
                <Weather weatherData={data} />
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default App;

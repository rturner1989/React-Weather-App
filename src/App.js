import React from "react";
import { useGlobalContext } from "./context";

const App = () => {
    const {} = useGlobalContext();
    return (
        <div id="app-container">
            <p>Hello World</p>
        </div>
    );
};

export default App;

import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [state, setstate] = useState(initialState);

    return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
export const useGlobalContext = () => {
    return useContext(AppContext);
};

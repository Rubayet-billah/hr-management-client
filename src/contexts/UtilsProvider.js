import React, { createContext, useContext, useState } from 'react';

export const UtilsContext = createContext();

const UtilsProvider = ({ children }) => {
    const [dashboardTitle, setDashboardTitle] = useState("");
    const value = {
        dashboardTitle,
        setDashboardTitle
    }
    return (
        <UtilsContext.Provider value={value}>
            {children}
        </UtilsContext.Provider>
    );
};

export const useUtils = () => useContext(UtilsContext);

export default UtilsProvider;
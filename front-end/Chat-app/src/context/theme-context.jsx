import React, { createContext, useContext } from 'react';
import useTheme from '../hooks/useThemes';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const theme = useTheme();
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useThemeContext must be used within a ThemeProvider');
    }
    return context;
};

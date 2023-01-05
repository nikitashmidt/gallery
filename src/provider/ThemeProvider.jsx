import { createContext, useState, useMemo } from 'react';

export const ThemeContext = createContext({ isDark: false})

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);
    const value = useMemo(() => ({ isDark, setIsDark }), [isDark]);
    if (isDark) { 
        document.body.style.setProperty('--body-background-color', "black")
      } else {
        document.body.style.setProperty('--body-background-color', "white")
      }
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

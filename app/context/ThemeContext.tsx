import { createContext, useEffect, useReducer } from "react";
import { darkTheme, lightTheme, themeReducer, ThemeState } from "../reducer/themeReducer";
import { ThemeProvider } from "@react-navigation/native";
import { useColorScheme } from "react-native";

interface ThemeContextProps {
    theme: ThemeState; // TODO
    setDarkTheme: () => void;
    setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps );

export const CustomThemeProvider = ({ children }: any) => {

    const colorsScheme = useColorScheme();
    
    const [theme, dispatch] = useReducer(themeReducer, (colorsScheme == 'dark') 
        ? darkTheme 
        : lightTheme
    )

    const setDarkTheme = () => {
        dispatch({type: 'set_dark_theme'})
    }

    const setLightTheme = () => {
        dispatch({type: 'set_light_theme'})
    }

    useEffect(() => {
        (colorsScheme == 'light')
          ? setLightTheme()
          : setDarkTheme()
      }, [colorsScheme])

    return (
        <ThemeProvider value={theme}>
            <ThemeContext.Provider
                value={{
                    theme,
                    setDarkTheme,
                    setLightTheme
                }}
            >
                { children }
            </ThemeContext.Provider>
        </ThemeProvider>
    )
}
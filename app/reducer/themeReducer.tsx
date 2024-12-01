import { DefaultTheme, Theme } from "@react-navigation/native"

type ThemeAction =
    | { type: 'set_light_theme' }
    | { type: 'set_dark_theme' }

export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark';
    dividerColor: string;
}

export const lightTheme: ThemeState = {
    currentTheme: 'light',
    fonts: DefaultTheme.fonts,
    dark: false,
    dividerColor: 'rgba(0, 0, 0, 0.7)',
    colors: {
        primary: 'black',
        background: '#f5f7fb',
        card: '#f5f7fb',
        text: 'black',
        border: '#e4e3e7',
        notification: 'teal'
    }
}

export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    fonts: DefaultTheme.fonts,
    dark: true,
    dividerColor: 'rgba(255, 255, 255, 0.7)',
    colors: {
        primary: '#717171',
        background: '#282828',
        card: '#121212',
        text: '#8b8b8b',
        border: '#3C3D37',
        notification: 'teal'
    }
}

export const themeReducer = ( state: ThemeState, action: ThemeAction ): ThemeState => {

    switch (action.type) {
        case 'set_light_theme':
            return lightTheme

        case 'set_dark_theme':
            return darkTheme
    
        default:
            return state;
    }

}
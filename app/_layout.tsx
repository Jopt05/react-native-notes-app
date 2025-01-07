import { Stack } from "expo-router";
import Header from "./components/shared/Header";
import { NotesProvider } from "./context/NotesContext";
import { TagProvider } from "./context/TagsContext";
import * as SplashScreen from 'expo-splash-screen';
import { CustomThemeProvider, ThemeContext } from "./context/ThemeContext";
import { useFonts } from "expo-font";
import { useEffect } from "react";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    // 'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
    'Monserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    'Monserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
    'Monserrat-Light': require('../assets/fonts/Montserrat-Light.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }


  return (
    <AppState>
      <Header />
      <Stack screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </AppState>
  )
}

const AppState = ({children}: any) => {

  return (
    <NotesProvider>
      <TagProvider>
        <CustomThemeProvider>
          {children}
        </CustomThemeProvider>
      </TagProvider>
    </NotesProvider>
  )
}

function setStatusBarStyle(arg0: string) {
  throw new Error("Function not implemented.");
}

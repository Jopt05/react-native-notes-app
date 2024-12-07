import { Stack } from "expo-router";
import Header from "./components/shared/Header";
import { NotesProvider } from "./context/NotesContext";
import { TagProvider } from "./context/TagsContext";
import { CustomThemeProvider, ThemeContext } from "./context/ThemeContext";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {

  return (
    <AppState>
      <StatusBar
        hidden={true}
      />
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

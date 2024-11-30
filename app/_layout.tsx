import { Stack } from "expo-router";
import Header from "./components/shared/Header";
import { NotesProvider } from "./context/NotesContext";
import { TagProvider } from "./context/TagsContext";

export default function RootLayout() {
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
        {children}
      </TagProvider>
    </NotesProvider>
  )
}
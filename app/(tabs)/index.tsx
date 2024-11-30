import { Text, View, StyleSheet, TextInput, FlatList } from "react-native";
import NoteContainer from "../components/NoteContainer";
import FloatingButton from "../components/FloatingButton";
import SearchInput from "../components/SearchInput";
import { router } from "expo-router";
import { useContext, useState } from "react";
import { NotesContext } from "../context/NotesContext";

export default function Index() {
  const { notesState } = useContext(NotesContext);

  const [searchTerm, setSearchTerm] = useState("");

  const redirectToNote = (noteId?: number) => {
    router.push(`/(tabs)/${noteId || null}`)
  }

  return (
    <View
      style={styles.container}
    >
      <View style={styles.bodyContainer}>
        <SearchInput />
        <View style={styles.searchTermContainer}>
          <Text style={styles.searchTermText}>
            All notes matching "Dev" are shown below
          </Text>
        </View>
        <FlatList 
          data={notesState.notes}
          renderItem={({ item, index }) => (
            <NoteContainer
              note={item}
              key={index}
              index={index}
            />
          )}
        />
      </View>
      <FloatingButton onPress={() => redirectToNote()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  bodyContainer: {
    flex: 1,
    padding: 10,
  },
  searchTermContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },
  searchTermText: {
    fontSize: 15,
    textAlign: 'center',
    marginVertical: 10,
    opacity: 0
  },
});
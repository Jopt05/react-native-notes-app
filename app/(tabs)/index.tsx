import { Text, View, StyleSheet, TextInput, FlatList } from "react-native";
import NoteContainer from "../components/NoteContainer";
import FloatingButton from "../components/FloatingButton";
import Input from "../components/Input";
import { router } from "expo-router";
import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";

export default function Index() {
  const { notesState } = useContext(NotesContext);

  const redirectToNote = () => {
    router.push('/(tabs)/null')
  }

  return (
    <View
      style={styles.container}
    >
      <View style={styles.bodyContainer}>
        <Input />
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
              index={index}
            />
          )}
        />
      </View>
      <FloatingButton onPress={redirectToNote} />
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
    marginVertical: 10
  },
});
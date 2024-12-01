import { Text, View, StyleSheet, TextInput, FlatList } from "react-native";
import NoteContainer from "../components/NoteContainer";
import FloatingButton from "../components/FloatingButton";
import { router } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { NotesContext } from "../context/NotesContext";
import { Ionicons } from "@expo/vector-icons";
import Input from "../components/Input";

export default function Index() {
  const { notesState } = useContext(NotesContext);

  const [searchTerm, setSearchTerm] = useState("");

  const redirectToNote = (noteId: number | null) => {
    console.log({noteId})
    router.push(`/(tabs)/${noteId}`)
  }

  return (
    <View
      style={styles.container}
    >
      <View style={styles.bodyContainer}>
        <View style={styles.searchContainer}>
            <Ionicons size={24} color={'red'} name="search-outline" />
            <Input 
              placeholder='Search here'
              editable={true}
              onChange={(value => setSearchTerm(value))} 
              inputValue={searchTerm}  
            />
        </View>
        <View style={{
          ...styles.searchTermContainer,
          ...( searchTerm == "" ) && styles.hidden
        }}>
          <Text style={styles.searchTermText}>
            All notes matching "{ searchTerm }" are shown below
          </Text>
        </View>
        <FlatList 
          data={notesState.notes}
          renderItem={({ item, index }) => (
            <NoteContainer
              note={item}
              key={index}
              index={index}
              hidden={ !item.tags.includes(searchTerm) && !item.title.includes(searchTerm) }
            />
          )}
        />
      </View>
      <FloatingButton onPress={() => redirectToNote(null)} />
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#e4e3e7',
    backgroundColor: '#f5f7fb',
  },
  searchInput: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 4,
    fontSize: 15
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
    color: 'black'
  },
  hidden: {
    opacity: 0,
  }
});
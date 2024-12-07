import { Text, View, StyleSheet, TextInput, FlatList } from "react-native";
import NoteContainer from "../components/NoteContainer";
import FloatingButton from "../components/FloatingButton";
import { router } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { NotesContext } from "../context/NotesContext";
import { Ionicons } from "@expo/vector-icons";
import Input from "../components/Input";
import { ThemeContext } from "../context/ThemeContext";
import SearchTerm from "../components/shared/SearchTerm";

export default function Index() {

  const { notesState } = useContext(NotesContext);
  const { theme } = useContext( ThemeContext );

  const [searchTerm, setSearchTerm] = useState("");

  const redirectToNote = (noteId: number | null) => {
    console.log({noteId})
    router.push(`/(tabs)/${noteId}`)
  }

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme.colors.card
      }}
    >
      <View style={styles.bodyContainer}>
        <View style={{
          ...styles.searchContainer,
          borderColor: theme.colors.border,
          backgroundColor: theme.colors.background,
        }}>
            <Ionicons size={24} color={ theme.dark ? 'white' : 'black' } name="search-outline" />
            <Input 
              placeholder='Search here'
              editable={true}
              onChange={(value => setSearchTerm(value))} 
              inputValue={searchTerm}  
              customStyle={{
                color: theme.colors.text
              }}
            />
        </View>
        <SearchTerm searchTerm={searchTerm}/>
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
    paddingVertical: 10,
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
  hidden: {
    opacity: 0,
  }
});
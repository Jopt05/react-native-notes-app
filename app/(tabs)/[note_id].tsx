import { Ionicons } from '@expo/vector-icons'
import { router, useLocalSearchParams } from 'expo-router'
import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native'
import Input from '../components/Input';
import { NotesContext } from '../context/NotesContext';
import Note from '../interfaces/Note';

function NoteScreen() {
  const { addNote, notesState } = useContext( NotesContext );
  const { note_id } = useLocalSearchParams();

  const [title, setTitle] = useState("");
  const [noteText, setNoteText] = useState("");
  const [tagList, setTagList] = useState<string[]>([]);

  const goBack = () => {
    router.back()
  }

  const handleSubmit = () => {
    let { notes } = notesState;
    if( note_id != 'null' ) {
    } else {
      const note: Note = {
        content: noteText,
        createdAt: new Date(),
        title,
        id: Math.round( Math.random() * 1000 ),
        tags: ['Hola']
      }
      console.log("Añadido")
      addNote(note)
    }
  }

  useEffect(() => {
    console.log({notesState})
  }, [notesState])
  
  
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={goBack} style={styles.headerBackContainer}>
          <Text style={styles.headerBackIcon}>{"<"}</Text>
          <Text style={styles.headerBackText}>Go Back</Text>
        </TouchableOpacity>
        <View style={styles.headerRightSide}>
          <Ionicons 
            name='trash-outline' 
            size={24} 
            color={'red'} 
            style={{
              ...(note_id != 'null') && styles.hidden
            }}
          />
          <Ionicons name='pencil' size={24} color={'black'} />
          <Text style={styles.headerRightSideCancel}>
            Cancel
          </Text>
          <TouchableOpacity 
            onPress={handleSubmit}
            style={{
              ...(!noteText || !title) && styles.hidden
            }}
          >
            <Text
              style={styles.headerRightSideSave}
            >
              Save Note
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Input 
          onChange={(value) => setTitle(value)} 
          customStyle={styles.titleText} 
          placeholder='Title here' 
          multiline
        />
        <View style={styles.titleDetailContainer}>
          <Ionicons name='pricetag-outline' size={16} color={'gray'} />
          <Text style={styles.titleDetailText}>
            Tags
          </Text>
          <Text style={styles.titleDetailTextRight}>
            Dev, React
          </Text>
        </View>
        <View 
          style={styles.titleDetailContainer}
        >
          <Ionicons name='time-outline' size={16} color={'gray'} />
          <Text 
            style={styles.titleDetailText}
          >
            Last edited
          </Text>
          <Text style={{
            ...styles.titleDetailTextRight,
            ...(note_id != 'null') && styles.hidden
          }}>
            Fecha
          </Text>
        </View>
      </View>
      <View>
        {/* <FlatList 
          horizontal
          data={["Hola", "Dos", "Uno"]}
        /> */}
      </View>
      <Input 
        multiline
        customStyle={styles.noteText}
        placeholder='Note here'
        onChange={(value) => setNoteText(value)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  headerContainer: {
    paddingTop: 10,
    paddingBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray'
  },
  headerBackContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 'auto',
  },
  headerBackIcon: {

  },
  headerBackText: {
    fontSize: 18,
    marginLeft: 10
  },
  headerRightSide: {
    marginLeft: 'auto',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  headerRightSideCancel: {
    color: 'gray',
    fontSize: 18
  },
  headerRightSideSave: {
    color: 'blue',
    fontSize: 18
  },
  titleContainer: {
    marginTop: 20,
    gap: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  titleDetailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  titleDetailText: {
    color: 'gray',
    width: 80
  },
  titleDetailTextRight: {
    color: 'black'
  },
  noteText: {
    fontSize: 16,
    marginTop: 10
  },
  hidden: {
    opacity: 0
  }
})

export default NoteScreen
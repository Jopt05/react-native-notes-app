import { Ionicons } from '@expo/vector-icons'
import { router, useLocalSearchParams } from 'expo-router'
import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native'
import Input from '../components/Input';
import { NotesContext } from '../context/NotesContext';
import Note from '../interfaces/Note';
import NoteTagChip from '../components/NoteTagChip';
import { TagContext } from '../context/TagsContext';
import { ThemeContext } from '../context/ThemeContext';

type NoteData = {
  title: string;
  content: string;
  tags: string[];
  createdAt?: Date;
  id?: number
}

function NoteScreen() {

  const { addNote, notesState, updateNote, deleteNote } = useContext( NotesContext );
  const { tagState } = useContext( TagContext );
  const { theme } = useContext(ThemeContext);

  const { note_id } = useLocalSearchParams();

  const [isEditing, setIsEditing] = useState(true);
  const [noteData, setNoteData] = useState<NoteData>({
    title: '',
    content: '',
    tags: []
  });

  const goBack = () => {
    router.back()
  }

  const handleDelete = () => {
    deleteNote(Number(note_id))
    goBack();
  }

  const handleSubmit = () => {
    if( note_id != 'null' ) {
      updateNote(noteData.title, noteData.content, noteData.tags, Number(note_id));
      setIsEditing(false);
    } else {
      const id = Math.round( Math.random() * 1000 );
      addNote({
        content: noteData.content,
        createdAt: new Date(),
        title: noteData.title,
        id,
        tags: noteData.tags
      })
      setNoteData({
        ...noteData,
        id
      })
    }
    setIsEditing(false);
  }

  const handleAddTag = (value: string) => {
    if( noteData.tags.includes(value) ) {
      setNoteData({
        ...noteData,
        tags: noteData.tags.filter( tag => tag != value )
      })
    } else {
      setNoteData({
        ...noteData,
        tags: [...noteData.tags, value]
      })
    }
  }

  useEffect(() => {
    console.log(note_id);
    if( note_id != 'null' ) {
      setIsEditing(false);
      const note = notesState.notes.find( note => note.id == Number(note_id) )
      if( note ) {
        setNoteData({
          title: note.title,
          content: note.content,
          tags: note.tags,
          createdAt: note.createdAt
        })
      }
    } else {
      setIsEditing(true);
      setNoteData({
        title: '',
        content: '',
        tags: []
      })
    }
  }, [note_id])
  

  return (
    <View style={{
      ...styles.container,
      backgroundColor: theme.colors.card
    }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={goBack} style={styles.headerBackContainer}>
          <Text style={{
            ...styles.headerBackIcon,
            color: theme.colors.text
          }}>
            {"<"}
          </Text>
          <Text style={{
            ...styles.headerBackText,
            color: theme.colors.text
          }}>
            Go Back
          </Text>
        </TouchableOpacity>
        <View style={styles.headerRightSide}>
          <TouchableOpacity
            onPress={handleDelete}
          >
            <Ionicons 
              name='trash-outline' 
              size={24} 
              color={'red'} 
              style={{
                ...(note_id == 'null') && styles.hidden
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsEditing(true)}
          >
            <Ionicons 
              style={{
                ...(isEditing) && styles.hidden
              }}
              name='pencil' 
              size={24} 
              color={theme.colors.text} 
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...(!isEditing) && styles.hidden
            }}
            onPress={() => setIsEditing(false)}
          >
            <Text 
              style={{
                ...styles.headerRightSideCancel,
                color: theme.colors.text
              }}
            >
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={handleSubmit}
            style={{
              ...(
                !noteData.content || 
                !noteData.title || 
                noteData.tags.length == 0 ||
                !isEditing) && styles.hidden
            }}
          >
            <Text
              style={{
                ...styles.headerRightSideSave,
                color: theme.dark ? 'lightblue' : 'blue'
              }}
            >
              Save Note
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Input 
          inputValue={noteData.title}
          editable={isEditing}
          onChange={(value) => setNoteData({...noteData, title: value})} 
          customStyle={{
            ...styles.titleText,
            color: theme.colors.text
          }} 
          placeholder='Title here' 
          multiline
        />
        <View style={styles.titleDetailContainer}>
          <Ionicons name='pricetag-outline' size={16} color={'gray'} />
          <Text style={styles.titleDetailText}>
            Tags
          </Text>
          <Text style={{
            ...styles.titleDetailTextRight,
            color: theme.colors.text
          }}>
            { noteData.tags.join(", ") }
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
          {
            (noteData.createdAt) && (
              <Text style={{
                ...styles.titleDetailTextRight,
                color: theme.colors.text
              }}>
                { noteData.createdAt.toLocaleString() }
              </Text>
            )
          }
        </View>
      </View>
      <View>
        <FlatList 
          horizontal
          style={styles.tagsContainer}
          data={tagState.tags}
          renderItem={({ item, index }) => (
            <NoteTagChip 
              disabled={!isEditing}
              tag={item}
              key={index}
              isSelected={noteData.tags.includes(item)}
              onPress={(value) => handleAddTag(value)}
            />
          )}
        />
      </View>
      <Input 
        inputValue={noteData.content}
        editable={isEditing}
        multiline
        customStyle={{
          ...styles.noteText,
          color: theme.colors.text
        }}
        placeholder='Note here'
        onChange={(value) => setNoteData({...noteData, content: value})}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    padding: 20
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
    marginTop: 5
  },
  hidden: {
    opacity: 0
  },
  tagsContainer: {
    flexDirection: 'row',
    marginTop: 10,
    paddingVertical: 8
  }
})

export default NoteScreen
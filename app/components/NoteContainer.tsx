import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import NoteTagChip from './NoteTagChip';
import Note from '../interfaces/Note';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { NotesContext } from '../context/NotesContext';
import { ThemeContext } from '../context/ThemeContext';

type Props = {
  note: Note;
  index: number;
  hidden?: boolean;
}

function NoteContainer({ note, index, hidden }: Props) {
  const { deleteNote } = useContext( NotesContext );
  const { theme } = useContext(ThemeContext);

  const [isDeleting, setIsDeleting] = useState(false);

  const redirectToEdit = () => {
    router.push(`/(tabs)/${note.id}`)
  }

  const handleLongPress = () => {
    setIsDeleting(true);
  }

  const handleDelete = () => {
    deleteNote(note.id);
    setIsDeleting(false);
  }

  return (
    <TouchableOpacity 
      onPress={redirectToEdit}
      onLongPress={handleLongPress}
      style={{
        ...styles.noteContainer,
        ...(hidden) && styles.hiddeNote
      }}
    >
        <View style={styles.infoContainer}>
          <Text style={{
            ...styles.noteTitle,
            color: theme.colors.text
          }}>
              {note.title}
          </Text>
          <View style={styles.noteTagsContainer}>
              {note.tags.map((tag, index) => (
              <NoteTagChip tag={tag} key={index} />   
              ))}
          </View>
          <Text style={styles.notesCreatedDate}>
          {  note.createdAt.toLocaleString() }
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => handleDelete()}
        >
          <Ionicons 
            name='trash-outline' 
            size={24} 
            color={'red'} 
            style={{
              ...(!isDeleting) && styles.hidden
            }}
          />
        </TouchableOpacity>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  noteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical: 10,
  },
  infoContainer: {
    flex: 1,
  },
  noteTitle: {
    fontWeight: 'medium',
    fontSize: 28
  },
  noteTagsContainer: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 5
  },
  notesCreatedDate: {
    fontSize: 15,
    color: 'gray',
    marginTop: 15
  },
  hidden: {
    opacity: 0
  },
  hiddeNote: {
    display: 'none'
  }
})

export default NoteContainer
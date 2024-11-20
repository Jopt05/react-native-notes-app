import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import NoteTagChip from './NoteTagChip';
import Note from '../interfaces/Note';
import { router } from 'expo-router';

type Props = {
  note: Note;
  index: number;
}

function NoteContainer({ note, index }: Props) {

  const redirectToEdit = () => {
    router.push(`/(tabs)/${note.id}`)
  }

  return (
    <TouchableOpacity 
      onPress={redirectToEdit}
      style={styles.noteContainer}
    >
        <Text style={styles.noteTitle}>
            {note.title}
        </Text>
        <View style={styles.noteTagsContainer}>
            {note.tags.map((tag, index) => (
             <NoteTagChip tag={tag} index={index} />   
            ))}
        </View>
        <Text style={styles.notesCreatedDate}>
         {  note.createdAt.toISOString() }
        </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  noteContainer: {
    marginHorizontal: 20,
    paddingVertical: 10
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
    color: '#e1e3e7',
    marginTop: 15
  }
})

export default NoteContainer
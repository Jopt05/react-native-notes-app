import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

type Props = {
    tag: string;
    index: number;
}

function NoteTagChip({ tag, index }: Props) {
  return (
    <View key={index} style={styles.notesChip}>
        <Text style={styles.notesChipText}>
            {tag}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  notesChip: {
    width: 'auto',
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 8,
    backgroundColor: '#e1e3e7'
  },
  notesChipText: {
    fontSize: 14,
  },
})

export default NoteTagChip
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

type Props = {
    tag: string;
    onPress?: (value: string) => void;
    isSelected?: boolean;
    disabled?: boolean;
}

function NoteTagChip({ tag, onPress, isSelected, disabled }: Props) {
  return (
      (onPress) 
      ? (
        <TouchableOpacity
          disabled={disabled}
          onPress={() => onPress(tag)} 
          style={{
            ...styles.notesChip,
            ...(isSelected) && styles.selected,
            marginHorizontal: 5
          }}
        >
            <Text style={styles.notesChipText}>
                {tag}
            </Text>
        </TouchableOpacity>
      )
      : (
        <View style={styles.notesChip}>
            <Text style={styles.notesChipText}>
                {tag}
            </Text>
        </View>
      )
    
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
  selected: {
    backgroundColor: '#b0b4bd'
  }
})

export default NoteTagChip
import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { ThemeContext } from '../context/ThemeContext';
import { fonts } from '../constants/fonts';

type Props = {
    tag: string;
    onPress?: (value: string) => void;
    isSelected?: boolean;
    disabled?: boolean;
}

function NoteTagChip({ tag, onPress, isSelected, disabled }: Props) {

  const { theme } = useContext(ThemeContext);

  return (
      (onPress) 
      ? (
        <TouchableOpacity
          disabled={disabled}
          onPress={() => onPress(tag)} 
          style={{
            ...styles.notesChip,
            marginHorizontal: 5,
            backgroundColor: theme.colors.card,
            ...(isSelected) && styles.selected,
            ...(isSelected && theme.dark) && styles.selectedDark
          }}
        >
            <Text style={{
              ...styles.notesChipText,
              color: theme.colors.text
            }}>
                {tag}
            </Text>
        </TouchableOpacity>
      )
      : (
        <View style={{
          ...styles.notesChip,
          backgroundColor: theme.colors.background
        }}>
            <Text style={{
              ...styles.notesChipText,
              color: theme.colors.text
            }}>
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
    fontFamily: fonts.regular
  },
  selected: {
    backgroundColor: '#b0b4bd'
  },
  selectedDark: {
    backgroundColor: '#575757'
  }
})

export default NoteTagChip
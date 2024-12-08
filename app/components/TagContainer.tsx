import { Ionicons } from '@expo/vector-icons';
import React, { useContext, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { ThemeContext } from '../context/ThemeContext';
import { TagContext } from '../context/TagsContext';

interface Props {
    tag: string;
    index: number;
    searchTerm: string;
}

export default function TagContainer({ tag, index, searchTerm }: Props) {

  const { theme } = useContext( ThemeContext );
  const { deleteTag } = useContext( TagContext );

  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = (tagName: string) => {
    deleteTag(tagName);
  }

  return (
    <TouchableOpacity key={index} style={{
        ...styles.tagContainer,
        ...(!tag.includes(searchTerm)) && styles.displayNone
      }}
      onLongPress={() => setIsDeleting(true)}
      >
        <Text style={{
          ...styles.tagName,
          color: theme.colors.text
        }}>{tag}</Text>
        <TouchableOpacity
          style={styles.tagIcon}
          onPress={() => handleDelete(tag)}
        >
          <Ionicons 
            name='trash-outline' 
            size={24} 
            color='red' 
            style={{
                ...(!isDeleting) && styles.hidden
            }}
          />
        </TouchableOpacity>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    tagContainer: {
        flexDirection: 'row',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        alignItems: 'center'
      },
    tagName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20
    },
    tagIcon: {
        marginLeft: 'auto',
        marginRight: 20
    },
    hidden: {
        opacity: 0
    },
    displayNone: {
        display: 'none'
    }
})
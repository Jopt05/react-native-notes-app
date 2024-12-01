import React, { RefObject, useContext, useRef, useState } from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import FloatingButton from '../components/FloatingButton'
import Input from '../components/Input'
import { TagContext } from '../context/TagsContext'

function Tags() {

  const { tagState, addTag, deleteTag } = useContext(TagContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [isCreatingTag, setIsCreatingTag] = useState(false);
  const [tagName, settagName] = useState("");

  const tagInput: RefObject<TextInput> | null | undefined = useRef(null);

  const handleSubmit = () => {
    addTag(tagName);
    settagName("");
    setIsCreatingTag(false);
  }

  const handleDelete = (tagName: string) => {
    deleteTag(tagName);
  }

  const handleCreateTag = () => {
    setIsCreatingTag(true);
    tagInput.current?.focus();
  }

  return (
    <View style={styles.container}>
        <View style={styles.searchContainer}>
            <Ionicons size={24} color={'red'} name="search-outline" />
            <Input 
              placeholder='Search here'
              editable={true}
              onChange={(value: string) => setSearchTerm(value)} 
              inputValue={searchTerm}  
            />
        </View>
        <View style={styles.bodyContainer}>
          <FlatList 
            data={tagState.tags}
            renderItem={({ item, index }) => (
              <View key={index} style={styles.tagContainer}>
                <Text style={styles.tagName}>{item}</Text>
                <TouchableOpacity
                  style={styles.tagIcon}
                  onPress={() => handleDelete(item)}
                >
                  <Ionicons name='trash-outline' size={24} color='red' />
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        <View style={{
          ...styles.inputContainer,
          ...(!isCreatingTag) && styles.hidden
        }}>
          <Input
            onRef={tagInput}
            onChange={(value) => settagName(value)}
            onSubmit={handleSubmit}
            inputValue={tagName}
            placeholder='Tag name'
            customStyle={{
              width: 20
            }}
            rightIcon={
              <TouchableOpacity
                onPress={() => setIsCreatingTag(false)}
              >
                <Ionicons name='close-outline' size={24} color='red' />
              </TouchableOpacity>
            }
          />
        </View>
        {
          (!isCreatingTag) && (
            <FloatingButton 
              onPress={() => handleCreateTag()}
            /> 
          )
        }
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10
    },
    bodyContainer: {
      flex: 1,
      marginTop: 30
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
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 30,
      paddingVertical: 5,
      backgroundColor: '#f5f7fb',
    },
    hidden: {
      opacity: 0
    }
})

export default Tags
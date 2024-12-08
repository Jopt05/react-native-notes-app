import React, { RefObject, useContext, useRef, useState } from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import FloatingButton from '../components/FloatingButton'
import Input from '../components/Input'
import { TagContext } from '../context/TagsContext'
import { ThemeContext } from '../context/ThemeContext'
import SearchTerm from '../components/shared/SearchTerm'
import TagContainer from '../components/TagContainer'

function Tags() {

  const { tagState, addTag } = useContext(TagContext);
  const { theme } = useContext( ThemeContext );

  const [searchTerm, setSearchTerm] = useState("");
  const [isCreatingTag, setIsCreatingTag] = useState(false);
  const [tagName, settagName] = useState("");

  const tagInput: RefObject<TextInput> | null | undefined = useRef(null);

  const handleSubmit = async() => {
    addTag(tagName);
    settagName("");
    setIsCreatingTag(false);
  }

  const handleCreateTag = () => {
    setIsCreatingTag(true);
    setTimeout(() => {
      tagInput.current?.focus();
    }, 500);
  }

  return (
    <View style={{
      ...styles.container,
      backgroundColor: theme.colors.card
    }}>
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
        <SearchTerm searchTerm={searchTerm} />
        <View style={styles.bodyContainer}>
          <FlatList 
            data={tagState.tags}
            renderItem={({ item, index }) => (
              <TagContainer 
                index={index}
                key={index}
                searchTerm={searchTerm}
                tag={item}
              />
            )}
          />
        </View>
        <View style={{
          ...styles.inputContainer,
          backgroundColor: theme.colors.background,
          ...(!isCreatingTag) && styles.hidden
        }}>
          <Input
            onRef={tagInput}
            onChange={(value) => settagName(value)}
            onSubmit={handleSubmit}
            inputValue={tagName}
            placeholder='Tag name'
            customStyle={{
              width: 20,
              color: theme.colors.text,
              paddingLeft: 15
            }}
            rightIcon={
              <TouchableOpacity
                onPress={() => setIsCreatingTag(false)}
              >
                <Ionicons 
                  style={{
                    paddingRight: 10
                  }}
                  name='close-outline' 
                  size={24} 
                  color='red' />
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
        padding: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10
    },
    bodyContainer: {
      flex: 1
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
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 30,
      paddingVertical: 5,
      backgroundColor: '#f5f7fb',
    },
    hidden: {
      opacity: 0
    },
    displayNone: {
      display: 'none'
    }
})

export default Tags
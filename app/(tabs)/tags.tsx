import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import SearchInput from '../components/SearchInput'
import { Ionicons } from '@expo/vector-icons'
import FloatingButton from '../components/FloatingButton'

function Tags() {
  return (
    <View style={styles.container}>
        <SearchInput />
        <View style={styles.bodyContainer}>
          <View style={styles.tagContainer}>
            <Text style={styles.tagName}>Tag</Text>
            <Ionicons style={styles.tagIcon} name='trash-outline' size={24} color='red' />
          </View>
          <View style={styles.tagContainer}>
            <Text style={styles.tagName}>Tag</Text>
            <Ionicons style={styles.tagIcon} name='trash-outline' size={24} color='red' />
          </View>
        </View>
        <FloatingButton /> 
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
      marginRight: 20,
      opacity: 0
    }
})

export default Tags
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

function SearchInput() {
  return (
    <View style={styles.searchContainer}>
        <Ionicons size={24} color={'red'} name="search-outline" />
        <TextInput style={styles.searchInput} />
    </View>
  )
}

const styles = StyleSheet.create({
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
})

export default SearchInput
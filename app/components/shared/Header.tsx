import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Header() {
  return (
    <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
            Notes App
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    headerContainer: {
      backgroundColor: '#f5f7fb',
      paddingVertical: 15,
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      paddingLeft: 10
    },
})

export default Header
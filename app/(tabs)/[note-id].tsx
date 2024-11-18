import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

function NoteScreen() {

  const goBack = () => {
    router.back()
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={goBack} style={styles.headerBackContainer}>
          <Text style={styles.headerBackIcon}>{"<"}</Text>
          <Text style={styles.headerBackText}>Go Back</Text>
        </TouchableOpacity>
        <View style={styles.headerRightSide}>
          <Ionicons name='trash-outline' size={24} color={'red'} />
          <Ionicons name='pencil' size={24} color={'black'} />
          <Text style={styles.headerRightSideCancel}>
            Cancel
          </Text>
          <Text style={styles.headerRightSideSave}>
            Save Note
          </Text>
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          React Performance Optimization
        </Text>
        <View style={styles.titleDetailContainer}>
          <Ionicons name='pricetag-outline' size={16} color={'gray'} />
          <Text style={styles.titleDetailText}>
            Tags
          </Text>
          <Text style={styles.titleDetailTextRight}>
            Dev, React
          </Text>
        </View>
        <View style={styles.titleDetailContainer}>
          <Ionicons name='time-outline' size={16} color={'gray'} />
          <Text style={styles.titleDetailText}>
            Last edited
          </Text>
          <Text style={styles.titleDetailTextRight}>
            Fecha
          </Text>
        </View>
      </View>
      <TextInput 
        multiline
        style={styles.noteText}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  headerContainer: {
    paddingTop: 10,
    paddingBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray'
  },
  headerBackContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 'auto',
  },
  headerBackIcon: {

  },
  headerBackText: {
    fontSize: 18,
    marginLeft: 10
  },
  headerRightSide: {
    marginLeft: 'auto',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  headerRightSideCancel: {
    color: 'gray',
    fontSize: 18
  },
  headerRightSideSave: {
    color: 'blue',
    fontSize: 18
  },
  titleContainer: {
    marginTop: 20,
    gap: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 38
  },
  titleDetailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  titleDetailText: {
    color: 'gray',
    width: 80
  },
  titleDetailTextRight: {
    color: 'black'
  },
  noteText: {
    fontSize: 16,
    marginTop: 10
  }
})

export default NoteScreen
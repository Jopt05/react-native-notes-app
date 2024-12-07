import { ThemeContext } from '@/app/context/ThemeContext'
import React, { useContext } from 'react'
import { StyleSheet, View, Text } from 'react-native'

interface Props {
    searchTerm: string
}

export default function SearchTerm({ searchTerm }: Props) {

    const { theme } = useContext( ThemeContext );

  return (
    <View style={{
        ...styles.searchTermContainer,
        ...( searchTerm == "" ) && styles.hidden
      }}>
        <Text style={{
          ...styles.searchTermText,
          color: theme.colors.text
        }}>
          All notes matching "{ searchTerm }" are shown below
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    searchTermContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
      },
    searchTermText: {
        fontSize: 15,
        textAlign: 'center',
        marginVertical: 10,
        color: 'black'
    },
    hidden: {
      opacity: 0,
    }
})
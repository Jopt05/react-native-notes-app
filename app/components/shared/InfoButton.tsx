import { ThemeContext } from '@/app/context/ThemeContext'
import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

function InfoButton() {

    const { theme } = useContext( ThemeContext );

  return (
    <TouchableOpacity
         style={{
            ...styles.buttonContainer,
         }}
    >
        <Text
            style={{
                ...styles.buttonText,
                color: 'gray'
            }}
        >
            i
        </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        bottom: 100,
        right: 20,
        backgroundColor: 'transparent',
        borderRadius: 50,
        borderColor: 'gray',
        borderWidth: 1,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 18
    }
})

export default InfoButton
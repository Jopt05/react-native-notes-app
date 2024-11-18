import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

type Props = {
  onPress?: () => void;
}

function FloatingButton({ onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
        <Ionicons name='add' size={24} color={'white'} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        bottom: 30,
        right: 20,
        backgroundColor: '#315df2',
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FloatingButton
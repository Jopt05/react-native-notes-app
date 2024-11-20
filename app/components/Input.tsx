import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

type Props = {
    placeholder?: string;
    multiline?: boolean;
    customStyle?: {};
    onChange: (value: string) => void;
}

function Input({ placeholder, multiline, customStyle, onChange }: Props) {

    const [value, setValue] = useState("");

    const handleChange = (value: string) => {
        setValue(value);
        onChange(value);
    }

  return (
    <View style={styles.container}>
        <TextInput 
        onChangeText={handleChange}
        placeholder={placeholder}
        value={value}
        multiline={multiline}
        style={{
            ...styles.searchInput,
            ...customStyle,
        }} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    searchInput: {
      flex: 1,
      flexDirection: 'row'
    },
})

export default Input
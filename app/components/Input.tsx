import React, { useEffect, useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

type Props = {
    placeholder?: string;
    multiline?: boolean;
    customStyle?: {};
    onChange: (value: string) => void;
    editable?: boolean;
    inputValue: string;
}

function Input({ placeholder, multiline, customStyle, onChange, editable, inputValue }: Props) {

    const [value, setValue] = useState("");

    const handleChange = (value: string) => {
        setValue(value);
        onChange(value);
    }

    useEffect(() => {
        setValue(inputValue);
    }, [inputValue])

  return (
    <View style={styles.container}>
        <TextInput
        editable={editable}
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
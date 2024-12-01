import React, { RefObject, useEffect, useState } from 'react'
import { StyleSheet, TextInput, TextStyle, View } from 'react-native'

type Props = {
    placeholder?: string;
    multiline?: boolean;
    customStyle?: TextStyle;
    onChange: (value: string) => void;
    editable?: boolean;
    inputValue: string;
    rightIcon?: React.JSX.Element;
    onSubmit?: () => void;
    onRef?: RefObject<TextInput> | null | undefined;
}

function Input({ 
  placeholder, 
  multiline, 
  customStyle, 
  onChange, 
  editable, 
  inputValue,  
  rightIcon,
  onSubmit,
  onRef
}: Props) {

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
          ref={onRef}
          onSubmitEditing={onSubmit}
          editable={editable}
          onChangeText={handleChange}
          placeholder={placeholder}
          value={value}
          multiline={multiline}
          style={{
              ...styles.searchInput,
              ...customStyle,
          }} 
        />
        {
          (rightIcon) && (
            rightIcon
          )
        }
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
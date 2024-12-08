import React, { RefObject, useContext, useEffect, useState } from 'react'
import { StyleSheet, TextInput, TextStyle, View } from 'react-native'
import { ThemeContext } from '../context/ThemeContext';

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
    onFocus?: () => void;
    onBlur?: () => void;
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
  onRef,
  onFocus,
  onBlur
}: Props) {

    const { theme } = useContext( ThemeContext );

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
          onFocus={onFocus}
          onBlur={onBlur}
          ref={onRef}
          onSubmitEditing={onSubmit}
          editable={editable}
          onChangeText={handleChange}
          placeholder={placeholder}
          value={value}
          multiline={multiline}
          placeholderTextColor={ theme.dark ? 'lightgray' : 'black' }
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
import { ThemeContext } from '@/app/context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { setStatusBarStyle } from 'expo-status-bar'
import { fonts } from '@/app/constants/fonts';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function Header() {

  const { theme, setDarkTheme, setLightTheme } = useContext(ThemeContext);

  const {top} = useSafeAreaInsets();

  useEffect(() => {
    setTimeout(() => {
      setStatusBarStyle(theme.dark ? 'dark' : 'light')
    }, 0);
  }, [])

  return (
    <View style={{
      ...styles.headerContainer,
      backgroundColor: theme.colors.background,
      paddingTop: top
    }}>
        <Text style={{
          ...styles.headerText,
          color: theme.dark ? 'white' : 'black'
        }}>
            Notes App {theme.dark}
        </Text>
        <TouchableOpacity
          onPress={() => theme.dark ? setLightTheme() : setDarkTheme()}
        >
          <Ionicons 
            name={theme.dark ? 'sunny-outline' : 'moon-outline'}
            size={24}
            color={theme.dark ? 'white' : 'black'}
          />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#f5f7fb',
      paddingVertical: 15,
      paddingHorizontal: 15
    },
    headerText: {
      fontSize: 24,
      fontFamily: fonts.bold
    },
})

export default Header
import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

function TabLayout() {
  return (
    <Tabs
        screenOptions={{
            headerShown: false,
            sceneStyle: {
                backgroundColor: 'white',
            }
        }}
    >
        <Tabs.Screen 
            name='index' 
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({color, focused}) => (
                    <Ionicons name={focused ? 'home' : 'home-outline'} size={24} color={color} />
                )
            }}
        />
        <Tabs.Screen 
            name='tags' 
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({color, focused}) => (
                    <Ionicons name={focused ? 'pricetag' : 'pricetag-outline'} size={24} color={color} />
                )
            }}
        />
        <Tabs.Screen 
            name='[note_id]'
            options={{
                tabBarShowLabel: false,
                href: null
            }}
        />
    </Tabs>
  )
}

export default TabLayout
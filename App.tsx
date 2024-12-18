import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../Project/Screens/Home'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import UserDetails from './Screens/UserDetails'


const Stack = createStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='UserDetails' component={UserDetails} />



      </Stack.Navigator>


    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
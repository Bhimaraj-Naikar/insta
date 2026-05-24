import { StyleSheet, View } from 'react-native'
import React from 'react'
import { store } from './src/redux/store'
import { Provider } from 'react-redux'
import BottomTabNavigator from './src/Navigation/BottomTabNavigator'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
      <Provider store={store}>
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      </Provider>
  )
}

export default App

const styles = StyleSheet.create({})
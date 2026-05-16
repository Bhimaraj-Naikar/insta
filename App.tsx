import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Auth from './src/components/screens/Auth'
import {store} from './src/redux/store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Auth/>
      </View>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 55,
  },

})
import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import SearchBar from './Search/SearchBar'
import SearchFeed from './Search/SearchFeed'

const SearchFeedMain = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <SearchBar/>
      <SearchFeed/>
    </ScrollView>
  )
}

export default SearchFeedMain

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import ExistingAccount from "../login/ExistingAccount";
import LoginScreen from '../login/LoginScreen';
import StorySection from './Home/StorySection';
import Header from './Home/Header';
import Post from './Post';
import SearchBar from './Search/SearchBar';

const Auth = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <ExistingAccount/> */}
      {/* <LoginScreen/> */}
      {/* <Header /> */}
      {/* <StorySection /> */}
      <SearchBar/>
      {/* <ScrollView>
        <Post />
        <Post />
      </ScrollView> */}
    </View>
  )
}

export default Auth

const styles = StyleSheet.create({})
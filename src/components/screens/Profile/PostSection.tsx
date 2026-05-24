import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'; // 1. Import Top Tab Navigator
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator(); // 2. Initialize it

const TopTabNavigator = () => {
  return (
    // Wrap in SafeAreaView so the top tabs don't hide under the phone's notch/status bar
    <SafeAreaView style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#000000',
          tabBarInactiveTintColor: '#939393',
          tabBarShowLabel: true, // Set to false if you want icons only
          tabBarIndicatorStyle: {
            backgroundColor: '#000000', // The color of the underline bar below the active tab
            height: 2,
          },
          tabBarStyle: {
            backgroundColor: '#ffffff', // Background color of the tab bar container
            elevation: 0,               // Removes drop shadow on Android
            shadowOpacity: 0,           // Removes drop shadow on iOS
          },
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => <Icon name="home-outline" size={20} color={color} />
          }}
        />
        <Tab.Screen 
          name="Search" 
          component={SearchFeedMain} 
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color }) => <Icon name="search-outline" size={20} color={color} />
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default TopTabNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
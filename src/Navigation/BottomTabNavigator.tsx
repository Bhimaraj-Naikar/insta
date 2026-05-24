import { StyleSheet , Pressable} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/FontAwesome'
import HomeScreen from '../components/screens/HomeScreen';
import SearchFeedMain from '../components/screens/SearchFeedMain';
import ProfileScreen from '../components/screens/Profile/ProfileScreen';
import ReelsScreen from '../components/screens/Reels/ReelsScreen';

const BottomTabNavigator = () => {
   const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#000',
      tabBarInactiveTintColor: '#939393ff',
      tabBarStyle: { paddingVertical: 0 },
      tabBarShowLabel: false,
      tabBarButton: (props) => (
        <Pressable 
          {...props} 
          android_ripple={null} 
          style={({ pressed }) => [
            props.style, 
            { opacity: 1 } 
          ]} 
        />
      ),
    }}>
      <Tab.Screen  
        name='Home' 
        component={HomeScreen} 
        options={{
          tabBarIcon:({ color, size }) => <Icon name="home-outline" size={size} color={color}/>
        }} 
      />
        <Tab.Screen 
          name='Reels' 
          component={ReelsScreen}  
          options={{
            tabBarIcon:({ color, size }) => <Icon name="play-outline" size={size} color={color}/>
          }}
        />
      <Tab.Screen 
        name='Search' 
        component={SearchFeedMain}  
        options={{
          tabBarIcon:({ color, size }) => <Icon name="search-outline" size={size} color={color}/>
        }}
      />
      <Tab.Screen 
        name='Profile' 
        component={ProfileScreen}  
        options={{
          tabBarIcon:({ color, size }) => <Entypo name="circle-thin" size={size} color={color}/>
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({})
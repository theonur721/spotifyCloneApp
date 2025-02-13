import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
// navigation import
import {NavigationContainer} from '@react-navigation/native';
// native-stack import
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// bottom-tab-navigation import
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// vector icons import
import Ionicons from 'react-native-vector-icons/Ionicons';
// screens import
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import LikedSongScreen from '../screens/LikedSongScreen';
import SongInfoScreen from '../screens/SongInfoScreen';
import ProfileScreen from '../screens/ProfileScreen';

// bottom-tab çalıştırma
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'black',
        },
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

// native-stack çalıştırma
const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={BottomTab} />
        <Stack.Screen name="Liked" component={LikedSongScreen} />
        <Stack.Screen name="Info" component={SongInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});

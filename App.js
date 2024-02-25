import React, {Component} from "react";
import { StyleSheet, Text, View } from 'react-native';
import Home from "./screens/Home";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Dailypic from "./screens/Dailypic";
import Spacecraft from "./screens/Spacecraft";
import Starmap from "./screens/Starmap"

const Stack =  createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Dailypic" component={Dailypic}/>
        <Stack.Screen name="Spacecraft" component={Spacecraft}/>
        <Stack.Screen name="Starmap" component={Starmap}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

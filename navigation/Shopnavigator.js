import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import OTP from "../screens/OTP";
import Home from "../screens/Home";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Customers from "../screens/Customers";
import Reports from "../screens/Reports";
import Profile from "../screens/Profile";
import { Ionicons,Octicons } from '@expo/vector-icons'; 
import { backgroundColor, color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const Stack = createNativeStackNavigator();
const Shopnavigator = () => {
  return (
    <NavigationContainer
    screenOptions={{ activeColor: "white", shifting: true }}>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            fontFamily: "open-sans-bold",
            fontSize: 20,
          },
        }}
      >
        {/* <Stack.Screen
          name="Login Screen"
          component={Login}
          options={{
            headerStyle: {
              backgroundColor: "#1A237E",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Enter OTP"
          component={OTP}
          options={{
            headerStyle: {
              backgroundColor: "#1A237E",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        /> */}
        <Stack.Screen
          name="Home"
          component={ShopnavigatorBottomTab}
          options={{
            headerStyle: {
              backgroundColor: "#1A237E",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const Tab = createBottomTabNavigator();
const ShopnavigatorBottomTab = () => {
  return(
    
  <Tab.Navigator
  screenOptions={{
    tabBarActiveTintColor: '#303F9F',
    headerStyle:{
      fontFamily:'open-sans-bold'
    }
    
    
  }}>
  <Tab.Screen name="Home" 
  component={Home} 
  options={{
    headerShown: false,
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="home-outline" color="#1A237E" size={25} />
    ),
  }}
  
  />
  <Tab.Screen name="Customer" 
  component={Customers} 
  options={{
    headerShown: false,
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="ios-person-outline" color="#1A237E" size={25} />
    ),
  }}
  />
  <Tab.Screen name="Report" 
  component={Reports}
  options={{
    headerShown: false,
    tabBarIcon: ({ color, size }) => (
      <Octicons name="report" color="#1A237E" size={25} />
    ),
  }} 
  />
  <Tab.Screen name="Profile" 
  component={Profile} 
  options={{
    headerShown: false,
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="person-circle-outline" color="#1A237E" size={25} />
    ),
  }}
  />
</Tab.Navigator>


  )



}


const styles = StyleSheet.create({});

export default Shopnavigator;

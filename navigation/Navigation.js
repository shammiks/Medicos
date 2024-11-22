import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import BlogScreen from "../screens/BlogScreen";
import AppointmentsScreen from "../screens/AppointmentsScreen";
import ChatScreen from "../screens/ChatScreen";
import { Ionicons } from "@expo/vector-icons";
import ProductsScreen from "../screens/ProductsScreen";
import BookAppointmentScreen from "../screens/BookAppointmentScreen"
import WebViewScreen from "../screens/WebViewScreen ";
import Notice from "../screens/Notice";
import UserProfile from "../screens/UserProfile";
import MedicineScreen from "../screens/Medicine";
import AboutScreen from "../screens/AboutScreen"
import ArticleDetails from "../screens/ArticleDetails";

const Stack = createNativeStackNavigator();


const Tab = createBottomTabNavigator();


const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // Custom icons for each tab
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Blogs") {
            iconName = focused ? "book" : "book-outline";
          } else if (route.name === "Appointments") {
            iconName = focused ? "calendar" : "calendar-outline";
          } else if (route.name === "Products") {
            iconName = focused ? "bag-add-sharp" : "bag-add-outline";
          }

          // Return Ionicons component for tab icons
          return <Ionicons name={iconName} size={size} color={color} />;
        },
     
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "600",
        },
      
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "gray",
        

        tabBarStyle: {
          backgroundColor: "#fff",
          paddingBottom: 5,
          paddingTop: 5,
          height: 80,
          borderTopWidth: 2,
          elevation: 10, 
          borderTopColor: '#dcdcdc',
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          headerShown:false,
        }}
      />
       <Tab.Screen
        name="Appointments"
        component={AppointmentsScreen}
        options={{
          tabBarLabel: "Appointments",
          headerShown:false
        }}
      />
      <Tab.Screen
        name="Blogs"
        component={BlogScreen}
        options={{
          tabBarLabel: "Blogs",
          headerShown:false
        }}
      />
     
      <Tab.Screen
        name="Products"
        component={ProductsScreen}
        options={{
          tabBarLabel: "Products",
          headerShown:false
        }}
      />
    </Tab.Navigator>
  );
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">

        <Stack.Screen
          name="Welcome"
          options={{ headerShown: false }}
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Signup"
          options={{ headerShown: false }}
          component={SignupScreen}
        />
         <Stack.Screen
          name="Medicine"
          options={{ headerShown: false }}
          component={MedicineScreen}
        />
         <Stack.Screen
          name="Products"
          options={{ headerShown: false }}
          component={ProductsScreen}
        />
         <Stack.Screen
          name="BookAppointment"
          options={{ headerShown: false }}
          component={BookAppointmentScreen}
        />
        <Stack.Screen
          name="About"
          options={{ headerShown: false }}
          component={AboutScreen}
        />
         <Stack.Screen
          name="Notice"
          component={Notice}
          options={{ headerShown: false, 
          }}
        />
         <Stack.Screen
          name="Webview"
          component={WebViewScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="User"
          component={UserProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chats"
          component={ChatScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Health"
          component={ArticleDetails}
          options={{ headerShown: false }}
        />

        {/* Bottom Tab Navigator (Main App Screens) */}
        <Stack.Screen
          name="Main"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

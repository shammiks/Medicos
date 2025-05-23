import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      className="flex-1"
      style={{backgroundColor: "#7b71f9" }}
    >
      <StatusBar style="dark"/>
      <View className="flex-1 flex justify-around my-4">
        <Text className="text-white font-bold text-4xl text-center">
          Let's Get Started!
        </Text>
        <View className="flex-row justify-center">
             <LottieView
                style={{width:300,height:300}}
                source={require("../assets/animation/meeting.json")}
                autoPlay
                loop
              />
        </View>
        <View className="space-y-4">
          <TouchableOpacity
          onPress={()=> navigation.navigate('Signup')}
          className="py-3 bg-yellow-400 mx-7 rounded-xl ">
            <Text
              className="text-xl font-bold text-center text-gray-700"
              
            >Sign Up</Text>
          </TouchableOpacity>
          <View className="flex-row justify-center">
            <Text className="text-white font-semibold">
              Already have an account?
            </Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
              <Text className="font-semibold text-yellow-400"> Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

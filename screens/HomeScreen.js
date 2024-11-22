import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Topbar from "../components/topbar";
import Searchbar from "../components/Searchbar";
//import CarouselEffect from "../components/Carousel";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import BlogSection from "../components/BlogSection";
import { StatusBar } from "expo-status-bar";
import YoutubeIframeScreen from "../components/YoutubeIFrame";
import ReviewSection from "../components/ReviewSction";
import FooterComp from "../components/Footer";
import SwiperHomeScreen from "../components/SwiperHomeScreen";
import Animated,{FadeInDown} from "react-native-reanimated";

const HomeScreen = () => {
  
  return (
    <Animated.ScrollView 
    entering={FadeInDown.duration(2000).delay(200).springify()}
    style={styles.container}>
     
     <StatusBar style="dark"/>

      {/* Top Bar */}

      <Topbar />

      {/* Search Bar */}

      <Searchbar />

      {/* Carousel */}

      <SwiperHomeScreen />

      {/* <CarouselEffect /> */}

      {/* Categories */}

      <Categories />

      {/* Featured Products */}
      
      <FeaturedProducts />

      {/* Blogs Section */}

      <BlogSection />
      
     {/* Youtube Videos */}

     <YoutubeIframeScreen />

     <ReviewSection />

     <FooterComp />
     
    </Animated.ScrollView>
   

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    
  },
  viewAllText: {
    left:157,
    color: "#007AFF",
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default HomeScreen;

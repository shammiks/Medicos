import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Animated ,{FadeInDown} from "react-native-reanimated";


const Cards = [
  {
    id: 1,
    title: "The Importance of Regular Health Checkups",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.ZzxuH304z08zvG9x0acN1AHaEK&pid=Api&P=0&h=180",
    quote: "A balanced diet is the foundation of health.",
  },
  {
    id: 2,
    title: "How to Improve Your Immune System Naturally",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.skxsZsjxhfBt-cryzKv0xwHaE7&pid=Api&P=0&h=180",
    quote: "A balanced diet is the foundation of health.",
  },
  {
    id: 3,
    title: "Top 5 Tips for Managing Diabetes",
    image:
      "https://tse4.mm.bing.net/th?id=OIP.Qn9xtJWgZmdGZg4iF4oJNAHaFj&pid=Api&P=0&h=180",
    quote: "A balanced diet is the foundation of health.",
  },
  {
    id: 4,
    title: "5 Ways to Boost Your Immune System",
    image: "https://tse2.mm.bing.net/th?id=OIP.ZzxuH304z08zvG9x0acN1AHaEK&pid=Api&P=0&h=180",
    quote: "A healthy immune system is your best defense.",
  },
  {
    id: 5,
    title: "The Importance of Regular Exercise",
    image:  "https://tse1.mm.bing.net/th?id=OIP.skxsZsjxhfBt-cryzKv0xwHaE7&pid=Api&P=0&h=180",
    quote: "Exercise is a celebration of what your body can do.",
  },
  {
    id: 6,
    title: "Tips for a Balanced Diet",
    image: "https://tse4.mm.bing.net/th?id=OIP.Qn9xtJWgZmdGZg4iF4oJNAHaFj&pid=Api&P=0&h=180",
    quote: "A balanced diet is the foundation of health.",
  },
  // Add more articles here
];

const BlogScreen = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient colors={["#e0f7fa", "#fce4ec"]} style={styles.container}>
      <Animated.ScrollView 
      entering={FadeInDown.duration(2000).delay(200).springify()}
      showsVerticalScrollIndicator={false}>
        <Text style={styles.header}>Health & Wellness Articles</Text>
        {Cards.map((article) => (
          <View key={article.id} style={styles.card}>
            <TouchableOpacity onPress={()=> navigation.navigate('Health')}>
              <Image source={{ uri: article.image }} style={styles.image} />
            </TouchableOpacity>
            <View style={styles.contentContainer}>
              <Text style={styles.title}>{article.title}</Text>
              <Text style={styles.quote}>{`"${article.quote}"`}</Text>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: "#f3f4f6",
    top: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#00796b",
    textAlign: "center",
    marginBottom: 20,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    textShadowColor: "#b2dfdb",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 35,
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  image: {
    width: "100%",
    height: 200,
  },
  contentContainer: {
    padding: 15,
    backgroundColor: "#f9fbe7",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00796b",
    marginBottom: 10,
    textAlign: "center",
    letterSpacing: 1,
    textShadowColor: "#b2dfdb",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  quote: {
    fontStyle: "italic",
    color: "#8e8e8e",
    fontSize: 16,
    textAlign: "center",
    paddingVertical: 10,
  },
});

export default BlogScreen;

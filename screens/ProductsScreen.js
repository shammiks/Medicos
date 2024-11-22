import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated,{FadeInDown} from "react-native-reanimated";

const products = [
  {
    id: "1",
    category: "Healthcare",
    name: "Paracetamol",
    price: "110Rs",
    image: "https://integratedlaboratories.in/wp-content/uploads/2022/08/Paracetamol-500mg-Tablets-Intemol-500-2.jpeg",
    description: "Digital monitor for accurate blood pressure readings.",
  },
  {
    id: "2",
    category: "Healthcare",
    name: "Cough Syrup",
    price: "200Rs",
    image: "https://5.imimg.com/data5/SELLER/Default/2021/6/BV/JP/UY/2529238/honitus-cough-syrup-500x500.jpg",
    description: "Digital monitor for accurate blood pressure readings.",
  },
  {
    id: "3",
    category: "Healthcare",
    name: "Bandage",
    price: "60Rs",
    image: "https://tse2.mm.bing.net/th?id=OIP.A-qzej_H941HVFfNX5NcuAHaEd&pid=Api&P=0&h=180",
    description: "Digital monitor for accurate blood pressure readings.",
  },
  {
    id:'4',
    category: "Healthcare",
    name:'Dettol',
    price:"120Rs",
    image:"https://tse4.mm.bing.net/th?id=OIP.WYTmdU-jOdiVOWWEAKpd2gHaHV&pid=Api&P=0&h=180",
    description: "Digital monitor for accurate blood pressure readings.",
  },
  {
    id: 5,
    category: "Healthcare",
    name: "Multivitamin Tablets",
    image: "https://via.placeholder.com/100",
    description: "Complete daily multivitamin for general health.",
    price: "25 Rs",
  },
  {
    id: 6,
    category: "Healthcare",
    name: "Blood Pressure Monitor",
    image: "https://via.placeholder.com/100",
    description: "Digital monitor for accurate blood pressure readings.",
    price: "50 Rs",
  },
  {
    id: 7,
    category: "Haircare",
    name: "Shampoo",
    image: "https://via.placeholder.com/100",
    description: "Nourishing shampoo for smooth and shiny hair.",
    price: "10 Rs",
  },
  {
    id: 8,
    category: "Haircare",
    name: "Hair Oil",
    image: "https://via.placeholder.com/100",
    description: "Natural hair oil for healthy scalp and hair growth.",
    price: "15 Rs",
  },
  // Add more products
];

const ProductScreen = () => {
  return (
    <LinearGradient colors={["#f9f9f9", "#e0f7fa"]} style={styles.container}>
      <Animated.ScrollView
      entering={
        FadeInDown.duration(4000).delay(200).springify()
      }
      showsVerticalScrollIndicator={false}
      >
        <Text style={styles.header}> Our Products</Text>
        {["Healthcare", "Haircare"].map((category) => (
          <View key={category}>
            <Text style={styles.categoryHeader}>{category}</Text>
            {products
              .filter((product) => product.category === category)
              .map((product) => (
                <View key={product.id} style={styles.productRow}>
                  <Image
                    source={{ uri: product.image }}
                    style={styles.productImage}
                  />
                  <View style={styles.productDetails}>
                    <Text style={styles.productName}>{product.name}</Text>
                    <Text style={styles.productDescription}>
                      {product.description}
                    </Text>
                    <Text style={styles.productPrice}>{product.price}</Text>
                  </View>
                </View>
              ))}
          </View>
        ))}
      </Animated.ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    top:30
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
  categoryHeader: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#0288d1",
    textTransform: "uppercase",
  },
  productRow: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  productDetails: {
    flex: 1,
    justifyContent: "center",
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#00796b",
  },
  productDescription: {
    fontSize: 14,
    color: "#757575",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#388e3c",
  },
});

export default ProductScreen;

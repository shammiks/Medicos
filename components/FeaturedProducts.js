import { StyleSheet, Text, View, FlatList, Image,TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const products = [
  {
    id: "1",
    name: "Paracetamol",
    price: "110Rs",
    image: "https://integratedlaboratories.in/wp-content/uploads/2022/08/Paracetamol-500mg-Tablets-Intemol-500-2.jpeg",
  },
  {
    id: "2",
    name: "Cough Syrup",
    price: "200Rs",
    image: "https://5.imimg.com/data5/SELLER/Default/2021/6/BV/JP/UY/2529238/honitus-cough-syrup-500x500.jpg",
  },
  {
    id: "3",
    name: "Bandage",
    price: "60Rs",
    image: "https://tse2.mm.bing.net/th?id=OIP.A-qzej_H941HVFfNX5NcuAHaEd&pid=Api&P=0&h=180",
  },
  {
    id:'4',
    name:'Dettol',
    price:"120Rs",
    image:"https://tse4.mm.bing.net/th?id=OIP.WYTmdU-jOdiVOWWEAKpd2gHaHV&pid=Api&P=0&h=180",
  }
];

const FeaturedProducts = () => {
  const navigation = useNavigation();
  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </View>
  );
  return (
    <View>
    <View style={{flexDirection:'row'}}>
      <Text style={styles.sectionTitle}>Featured Products</Text>
      <TouchableOpacity onPress={()=> navigation.navigate('Products')}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
    <FlatList
      data={products}
      horizontal
      renderItem={renderProductItem}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.productList}
    />
    </View>
  );
};

export default FeaturedProducts;

const styles = StyleSheet.create({
  productList: {
    marginBottom: 20,
  },
  productItem: {
    alignItems: "center",
    marginRight: 20,
  },
  productImage: {
    width: 130,
    height: 130,
    borderRadius: 8,
  },
  productName: {
    marginTop: 10,
    fontSize: 14,
  },
  productPrice: {
    fontSize: 14,
    color: "#888",
  },
  viewAllText: {
    right:-138,
    color: "#007AFF",
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

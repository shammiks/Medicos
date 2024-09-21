import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Searchbar = () => {
  return (
    <View style={styles.searchBar}>
      <Ionicons name="search-outline" size={20} color="#000" />
      <TextInput
        placeholder="Search for medicines or products"
        style={styles.searchInput}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginVertical: 20,
    shadowColor: "black",
    borderRadius: 20,
    borderWidth:1,
    borderColor:'gray'
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
  },
});

export default Searchbar;

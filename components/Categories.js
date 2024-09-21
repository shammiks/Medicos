import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';  
import  FontAwesome5 from '@expo/vector-icons/FontAwesome5';
const CategoriesSection = () => {
  const navigation = useNavigation();

  const handleCategoryPress = (category) => {
    if (category === 'medicine') {
      navigation.navigate('Medicine');  
    } else if (category === 'healthcare') {
      navigation.navigate('Products'); 
    } else if (category === 'appointments') {
      navigation.navigate('Appointments'); 
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Categories</Text>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoriesContainer}>
        {/* Medicine */}
        <TouchableOpacity
          style={styles.categoryItem}
          onPress={() => handleCategoryPress('medicine')}
        >
          <Ionicons name="medkit-outline" size={30} color="#007AFF" />
          <Text style={styles.categoryText}>Medicine</Text>
        </TouchableOpacity>

        {/* Healthcare Products */}
        <TouchableOpacity
          style={styles.categoryItem}
          onPress={() => handleCategoryPress('healthcare')}
        >
          <Ionicons name="heart-outline" size={30} color="#007AFF" />
          <Text style={styles.categoryText}>Healthcare</Text>
        </TouchableOpacity>

        {/* haircare */}
        <TouchableOpacity
          style={styles.categoryItem}
          onPress={() => handleCategoryPress('haircare')}
        >
          <FontAwesome5 name="hand-holding-heart" size={30} color="#007AFF" />
          <Text style={styles.categoryText}>HairCare</Text>
        </TouchableOpacity>

        {/* others */}
        <TouchableOpacity
          style={styles.categoryItem}
          onPress={() => handleCategoryPress('other')}
        >
          <Ionicons name="options-outline" size={30} color="#007AFF" />
          <Text style={styles.categoryText}>Others</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    top:-10
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  categoriesContainer: {
    paddingHorizontal: 10,
    left:-8,
  },
  categoryItem: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: 120,
    marginRight: 10, 
    alignItems: 'center',
    justifyContent:'center'
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
   
  },
});

export default CategoriesSection;

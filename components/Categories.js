import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';  
import { MaterialCommunityIcons } from '@expo/vector-icons';
const CategoriesSection = () => {
  const navigation = useNavigation();

  const handleCategoryPress = (category) => {
    if (category === 'medicine') {
      navigation.navigate('Medicine');  
    } else if (category === 'healthcare') {
      navigation.navigate('Products'); 
    } else if (category === 'appointments') {
      navigation.navigate('Appointments'); 
    } else if (category === 'haircare') {
      navigation.navigate('Products'); 
  }else if (category === 'About us') {
    navigation.navigate('About'); 
  };
  }
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
          <MaterialCommunityIcons name="heart-plus-outline" size={30} color="#007AFF" />
          <Text style={styles.categoryText}>Healthcare</Text>
        </TouchableOpacity>

        {/* haircare */}
        <TouchableOpacity
          style={styles.categoryItem}
          onPress={() => handleCategoryPress('haircare')}
        >
          <MaterialCommunityIcons name="heart-outline" size={30} color="#007AFF" />
          <Text style={styles.categoryText}>HairCare</Text>
        </TouchableOpacity>

        {/* others */}
        <TouchableOpacity
          style={styles.categoryItem}
          onPress={() => handleCategoryPress('About us')}
        >
          <MaterialCommunityIcons name="account-details-outline" size={30} color="#007AFF" />
          <Text style={styles.categoryText}>About us</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CategoriesSection;

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



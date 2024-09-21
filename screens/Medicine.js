import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const medicines = [
  {
    name: 'Arnica',
    image: 'https://plus.unsplash.com/premium_photo-1668487826871-2f2cac23ad56?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D',
    description: 'Used for pain relief and healing bruises.',
  },
  {
    name: 'Nux Vomica',
    image: 'https://plus.unsplash.com/premium_photo-1668487826871-2f2cac23ad56?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D',
    description: 'Commonly used for indigestion and headaches.',
  },
  {
    name: 'Belladonna',
    image: 'https://plus.unsplash.com/premium_photo-1668487826871-2f2cac23ad56?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D',
    description: 'Helpful in treating high fever and inflammation.',
  },
  {
    name: 'Calendula',
    image: 'https://plus.unsplash.com/premium_photo-1668487826871-2f2cac23ad56?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D',
    description: 'Great for healing skin wounds and irritations.',
  },
  {
    name: 'Gelsemium',
    image: 'https://plus.unsplash.com/premium_photo-1668487826871-2f2cac23ad56?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D',
    description: 'Commonly used for flu-like symptoms such as body aches and chills.',
  },
  {
    name: 'Rhus Toxicodendron',
    image: 'https://plus.unsplash.com/premium_photo-1668487826871-2f2cac23ad56?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D',
    description: 'Useful for arthritis, joint pain, and skin rashes.',
  },
  {
    name: 'Hypericum',
    image: 'https://plus.unsplash.com/premium_photo-1668487826871-2f2cac23ad56?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D',
    description: 'Known for treating nerve pain and injuries.',
  },
  {
    name: 'Ignatia',
    image: 'https://plus.unsplash.com/premium_photo-1668487826871-2f2cac23ad56?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D',
    description: 'Typically used for emotional support, especially grief or stress.',
  },
  {
    name: 'Bryonia',
    image: 'https://plus.unsplash.com/premium_photo-1668487826871-2f2cac23ad56?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D',
    description: 'Helps alleviate dry cough and headaches.',
  },
  {
    name: 'Sulphur',
    image: 'https://plus.unsplash.com/premium_photo-1668487826871-2f2cac23ad56?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D',
    description: 'Commonly used for skin issues like eczema or rashes.',
  },
];

const MedicineScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Our Medicines</Text>
        <Text style={styles.subHeaderText}>
          "Healing naturally with trust and care."
        </Text>
      </View>
      {medicines.map((medicine, index) => (
        <View key={index} style={styles.medicineCard}>
          <Image source={{ uri: medicine.image }} style={styles.medicineImage} />
          <View style={styles.textContainer}>
            <Text style={styles.medicineName}>{medicine.name}</Text>
            <Text style={styles.medicineDescription}>{medicine.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingTop: 10,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2E8B57',
    marginBottom: 5,
    marginTop:30
  },
  subHeaderText: {
    fontSize: 16,
    color: '#666',
    fontStyle: 'italic',
  },
  medicineCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    shadowRadius: 10,
    elevation: 5,
  },
  medicineImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: 'cover',
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  medicineName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  medicineDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default MedicineScreen;

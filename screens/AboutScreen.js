import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Animated,{FadeInDown} from 'react-native-reanimated';

const AboutScreen = () => {
  return (
    <Animated.ScrollView 
    entering={FadeInDown.duration(4000).delay(200).springify()}
    style={styles.container}>
      {/* Doctor's Image */}
      <Image
        source={{ uri: 'https://dpmemorial.com/photo.jpeg' }}
        style={styles.doctorImage}
      />

      {/* Doctor's Details */}
      <View style={styles.card}>
        <Text style={styles.doctorName}>Dr. Amit Gupta</Text>
        <Text style={styles.specialization}>A Doctor in New Delhi</Text>
        <Text style={styles.details}>
          Dr. Amit Gupta is a compassionate healthcare professional with over 15 years of experience in general medicine. He specializes in diagnosing and treating a wide range of acute and chronic conditions, with a focus on holistic healing and patient-centered care. Dr. Doe has been recognized for her excellence in patient care and her dedication to promoting overall health and wellness.
        </Text>
        <Text style={styles.details}>
          He is a strong advocate for preventive medicine and has successfully helped hundreds of patients achieve better health through personalized treatment plans. Dr. Doe is committed to continuously learning and staying updated with the latest advancements in medicine.
        </Text>
        <Text style={styles.quote}>
          "Caring for my patients is my passion, and I believe that health is a journey, not a destination."
        </Text>
      </View>
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  doctorImage: {
    width: Dimensions.get('window').width,
    height: 300,
    resizeMode: 'cover',
  },
  card: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  doctorName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
  },
  specialization: {
    fontSize: 18,
    fontWeight: '600',
    color: '#888',
    textAlign: 'center',
    marginBottom: 15,
  },
  details: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
    marginBottom: 15,
    textAlign: 'justify',
  },
  quote: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#777',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default AboutScreen;

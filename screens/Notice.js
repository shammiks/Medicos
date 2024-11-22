import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const Notice = () => {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
          <Text style={styles.noticeText}>Announcement</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', 
  },
  modalContent: {
    width: width * 0.9, 
    height: height * 0.9, 
    backgroundColor: '#FFF',
    borderRadius: 25,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 10,
  },
  noticeText: {
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
});

export default Notice;

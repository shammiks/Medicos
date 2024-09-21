import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FooterComp = () => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>
        Trust the healing power of nature, homeopathy cares for you...(Dr. Amit Gupta)
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flex:1,
    backgroundColor: '#F0F0F0', // Light gray background
    paddingVertical: 15,
    //paddingHorizontal: 10,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#dcdcdc',
    height:150,
  },
  footerText: {
    fontSize: 28,
    color: '#2E8B57',
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight:40
  },
});

export default FooterComp;

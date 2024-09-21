import React, { useRef, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { View, Animated, Dimensions, StyleSheet, Image, Easing, Text } from 'react-native';

const { width } = Dimensions.get('window');

const ReviewSection = () => {
  const scrollX1 = useRef(new Animated.Value(0)).current;
  const scrollX2 = useRef(new Animated.Value(0)).current;

  // Image array with local images
  const imageUrls = [
    require('../assets/images/review1.png'),
    require('../assets/images/review2.png'),
    require('../assets/images/review3.png'),
    require('../assets/images/review4.png'),
    require('../assets/images/review5.png'),
    require('../assets/images/review6.png'),
    require('../assets/images/review7.png'),
    require('../assets/images/review8.png'),
    require('../assets/images/review9.png'),
    require('../assets/images/review10.png'),
    require('../assets/images/review11.png'),
    require('../assets/images/review12.png'),
    require('../assets/images/review13.png'),
    require('../assets/images/review14.png'),
  ];

  const imageWidth = 300; // Adjust based on actual width of each image
  const totalImageRowWidth = imageWidth * imageUrls.length; // Total width of all images

  // Constant scroll speed (in pixels per second)
  const scrollSpeed = 100; // You can adjust this value for faster or slower speed
  const scrollDuration = (totalImageRowWidth / scrollSpeed) * 1000; // Calculate the duration based on speed

  const startScrolling = (scrollAnim, direction = 'right') => {
    const distance = direction === 'right' ? totalImageRowWidth - width : -(totalImageRowWidth - width);
    const resetValue = direction === 'right' ? -width : width;

    // Initial negative offset to make the scrolling loop continuous
    scrollAnim.setValue(resetValue);

    Animated.loop(
      Animated.sequence([
        Animated.timing(scrollAnim, {
          toValue: distance,
          duration: scrollDuration, // Adjusted scroll duration based on image row width
          useNativeDriver: true,
          easing: Easing.linear,
        }),
        Animated.timing(scrollAnim, {
          toValue: resetValue,
          duration: 0, // Instantly reset to the start position
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  useEffect(() => {
    startScrolling(scrollX1, 'right');
    startScrolling(scrollX2, 'left');
  }, []);

  const renderImageRow = (scrollAnim) => {
    return (
      <Animated.View style={[styles.imageRow, { transform: [{ translateX: scrollAnim }] }]}>
        {imageUrls.map((image, index) => (
          <Image key={index} source={image} style={[styles.image, { width: imageWidth }]} />
        ))}
      </Animated.View>
    );
  };


  return (
    <ScrollView style={styles.maincontainer}>
      <Text style={styles.text}>What our Customers say!!</Text>
      <View style={styles.container}>
        {/* Left to Right Scroll */}
        {renderImageRow(scrollX1)}
      </View>
      <View style={styles.container2}>
        {/* Right to Left Scroll */}
        {renderImageRow(scrollX2)}
      </View>
    </ScrollView>
  );
};

export default ReviewSection;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 22,
    marginLeft: 3,
    fontWeight: '600',
  },
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    //margin: 20,
  },
  container2: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  imageRow: {
    flexDirection: 'row',
    height: 200,
  },
  image: {
    height: 220,
    marginHorizontal: 10,
    borderRadius: 20,
    resizeMode:'contain',
    //backgroundColor:'black'
  },
});


import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import LottieView from "lottie-react-native";
import { LinearGradient } from 'expo-linear-gradient'; 
import Animated, { FadeInDown } from 'react-native-reanimated';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const BookAppointmentScreen = ({route}) => {
  const { selectedDate, selectedTimeSlot } = route.params;
  // console.log(selectedDate);
  // console.log(selectedTimeSlot);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [selectedDocument, setSelectedDocument] = useState(null);

  const handleAppointmentBooking = () => {
    if (name && phoneNumber && email && message) {
      Alert.alert('Appointment Booked', `Thank you ${name}, Let's meet at clinic!`);
    } else {
      Alert.alert('Error', 'Please fill out all fields.');
    }
  };

  const handleDocumentPick = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*', // You can specify the types of documents here
      });

      console.log(result);

      if (result && result.assets!= null) {
        const selectedAsset = result.assets[0];
        setSelectedDocument(result);
        Alert.alert(`Document Selected: ${selectedAsset.name}`);
      }
      else if(result.canceled === true){
          return;
      }
      else {
        Alert.alert('No Document Selected', 'Please select a document.');
      }
    } catch (error) {
      console.error('Error picking document:', error);
      Alert.alert('Error', 'An error occurred while picking the document.');
    }
  };

  const handleDocumentDelete = ()=> {
    setSelectedDocument(false);
  }

  return (

    <LinearGradient
      colors={['#FFFFFF', '#D7E6F6']}
      style={styles.gradient}
    >
      <Animated.View entering={FadeInDown.duration(3000).delay(100).springify()}>
        <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}>
          <LottieView
            style={{ width: 150, height: 150,top:10}}
            source={require("../assets/animation/appointment.json")}
            autoPlay
            loop
          />

          <Text style={styles.heading}>Book an Appointment</Text>


          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor={'gray'}
            value={name}
            onChangeText={setName}
          />

          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor={'gray'}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={'gray'}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <TextInput
            style={[styles.input, styles.messageInput]}
            placeholder="Describe your problem"
            placeholderTextColor={'gray'}
            value={message}
            onChangeText={setMessage}
            multiline
          />
 
          {/* Document Picker Button */}
          <View style={{flexDirection:'row',marginBottom:20, top:30}}>
          <AntDesign style={{top:10, left:-10}} name='select1' size={30} color={'black'}/>
            <Text onPress={handleDocumentPick} style={styles.buttonText2}>
            {selectedDocument ? 'Document Picked' : 'Pick a Document'}
            </Text>
            </View>
          
            <View style={{flexDirection:'row', top:20}}>
              <MaterialCommunityIcons style={{top:5 ,left:-5}} name='camera-document-off' size={30} color={'black'}/>
            <Text onPress={handleDocumentDelete} style={styles.buttonText2}>
             Remove Document
            </Text>
            </View>
         
            <Text style={styles.text}>{selectedDate}</Text>
            <Text style={styles.text}>{selectedTimeSlot}</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={handleAppointmentBooking}
          >
            <Text style={styles.buttonText}>Book Appointment</Text>
          </TouchableOpacity>
        </ScrollView>
      </Animated.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    top:40,
    fontSize: 20,
    marginBottom: 10,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
    top:20
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    top:20
  },
  messageInput: {
    height: 100,
    width:320
  },
  button: {
    backgroundColor: '#FF007F',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
    elevation: 6,
    top:30
  },
  button2: {
    backgroundColor: '#007FFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
    elevation: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonText2: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
    top:10,
    marginBottom:10
  },
});

export default BookAppointmentScreen;

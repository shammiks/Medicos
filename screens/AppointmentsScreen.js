import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown, FadeInLeft } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

const AppointmentsScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const timeSlots = ['12:00 PM - 3:00 PM', '6:00 PM - 9:00 PM'];

  const handleDateChange = (event, date) => {
    const currentDate = date || selectedDate;
    setShowDatePicker(false);
    setSelectedDate(currentDate);
  };

  const handleBookAppointment = () => {
    if (!selectedDate || !selectedTimeSlot) {
      Alert.alert(
        "Incomplete Selection",
        "Please select both a date and a time slot."
      );
    } else {
      navigation.navigate('BookAppointment',
        {
          selectedDate: selectedDate.toDateString(),
          selectedTimeSlot,
        }
      );
     
    }
  };

  // Trigger animation on screen focus
  useFocusEffect(
    React.useCallback(() => {
      // Any necessary reset or setup can be done here
      return () => {
        setSelectedTimeSlot(null);
        setSelectedDate(new Date());
      };
    }, [])
  );

  return (
   
    <LinearGradient
      colors={["#e0f7fa", "#fce4ec"]}
      style={styles.gradient}
    >
      <Animated.View entering={FadeInDown.duration(3000).delay(100).springify()}>
        <ScrollView contentContainerStyle={styles.container}>
          <Animated.Image
            entering={FadeInLeft.duration(2000).delay(200).springify()}
            source={{ uri: 'https://dpmemorial.com/logo.png' }}
            style={styles.doctorImage}
          />

        
          <Text style={styles.doctorName}>Dr. Amit Gupta</Text>
         
         
          <Text style={styles.specialization}>A doctor in New Delhi</Text>
          <TouchableOpacity onPress={()=> navigation.navigate('About')}>
          <Text style={{top:-20,fontSize:20,color:'blue'}}>More info!!</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 22, fontWeight: '500', left: -130, marginBottom: 5 }}>Address :</Text>
          <Text style={styles.specialization}>
            F - 22/102, Shop Number 5, 6, Rohini Sector-  3, Delhi - 110085 (Beside State Bank Of, Near Gopal Jee Bhaturewale)
          </Text>
          <Text style={{ fontSize: 22, fontWeight: '500', left: -140, marginBottom: 5, top: -20 }}>Phone :</Text>
          <Text style={{ fontSize: 18, color: '#555', top: -20, left: -60 }}>9716749169, 7654602444</Text>

          {/* Select Appointment Date */}
          <Text style={styles.sectionTitle}>Select Appointment Date</Text>
          <TouchableOpacity
            style={styles.datePickerButton}
            onPress={() => setShowDatePicker(true)}
          >
            <Text style={styles.datePickerText}>
              {selectedDate.toDateString()}
            </Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display="default"
              minimumDate={new Date()}
              onChange={handleDateChange}
            />
          )}

          {/* Select Time Slot */}
          <Text style={styles.sectionTitle}>Select Time Slot</Text>
          <View style={styles.optionContainer}>
            {timeSlots.map((slot) => (
              <TouchableOpacity
                key={slot}
                style={[
                  styles.optionButton,
                  selectedTimeSlot === slot && styles.selectedOptionButton,
                ]}
                onPress={() => setSelectedTimeSlot(slot)}
              >
                <Text
                  style={[
                    styles.optionText,
                    selectedTimeSlot === slot && styles.selectedOptionText,
                  ]}
                >
                  {slot}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Book Appointment Button */}
          <TouchableOpacity
            style={styles.bookButton}
            onPress={handleBookAppointment}  // Updated to use the new function
          >
            <Text style={styles.bookButtonText}>Enter Your Details</Text>
          </TouchableOpacity>
        </ScrollView>
      </Animated.View>
    </LinearGradient>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doctorImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#007AFF',
    marginTop: 40,
  },
  doctorName: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  specialization: {
    fontSize: 18,
    color: '#555',
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 10,
    alignSelf: 'flex-start',
    marginBottom: 25,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  optionButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  selectedOptionButton: {
    backgroundColor: '#007AFF',
  },
  optionText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  selectedOptionText: {
    color: '#fff',
  },
  datePickerButton: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: '#fff',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#007AFF',
    marginBottom: 20,
  },
  datePickerText: {
    fontSize: 16,
    color: '#333',
  },
  bookButton: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#FF007F',
    borderRadius: 25,
    alignItems: 'center',
    borderWidth: 2,
    elevation: 5,
    borderColor: 'white',
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  animatedContainer: {
    width: '100%',
    alignItems: 'center',
  },
});

export default AppointmentsScreen;

import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Topbar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.Topbar}>
    <TouchableOpacity onPress={()=> navigation.navigate('User')}>
    <Ionicons name="person-circle-outline" size={40} color="#000" />
    </TouchableOpacity>
    <TouchableOpacity onPress={()=> navigation.navigate('Notice')}>
    <Image style={{height:40,width:40}} source={require('../assets/images/notice.png')}/>
    </TouchableOpacity>
  </View>
  )
}
const styles = StyleSheet.create({
    Topbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
      },
})

export default Topbar
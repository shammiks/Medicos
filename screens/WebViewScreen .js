// WebViewScreen.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

const WebViewScreen = ({ route }) => {
  const { url } = route.params;

  return (
    
    <SafeAreaView style={styles.container}>
        
      <WebView source={{ uri: url }} />
    </SafeAreaView>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode:'contain'
  },
});

export default WebViewScreen;

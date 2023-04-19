import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { requestUserPermission, NotificationListener } from './src/utils/firabaseHelper';



export default function App() {

  useEffect(()=> {
    requestUserPermission();
    NotificationListener();
  }, [])


  return (
    <View style={styles.container}>
      <Text>Otário</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

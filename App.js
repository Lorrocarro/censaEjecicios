import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, {useState} from 'react';
import App1 from './App1.js'; // Import App1
import App2 from './App2.js'; // Import App2
export default function App() {
  const [showApp1, setShowApp1] = useState(false);
  const [showApp2, setShowApp2] = useState(false);

  return (
    <View style={styles.container}> 
   {!showApp1 ? (
        <Button title="edad" onPress={() => setShowApp1(true)} />
      ) : (
        <App1 />
      )}
      {!showApp2 ? (
        <Button title="analisis de numeros " onPress={() => setShowApp2(true)} />
      ) : (
        <App2 />
      )}
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
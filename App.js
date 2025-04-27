import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
import App1 from './App1.js'; // Importa App1
import App2 from './App2.js'; // Importa App2
import App3 from './App3.js'; // Importa App3

export default function App() {
  const [pantalla, setPantalla] = useState(null);

  return (
    <View style={styles.container}> 
      {pantalla === 'App1' && <App1 />}
      {pantalla === 'App2' && <App2 />}
      {pantalla === 'App3' && <App3 />}
      {pantalla === null && (
        <>
          <Button title="Edad" onPress={() => setPantalla('App1')} />
          <Button title="Análisis de Números" onPress={() => setPantalla('App2')} />
          <Button title="Nueva funcionalidad" onPress={() => setPantalla('App3')} />
        </>
      )}
      {pantalla !== null && <Button title="Volver" onPress={() => setPantalla(null)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  }
});

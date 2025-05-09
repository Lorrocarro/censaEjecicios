import { StyleSheet, View, Button } from 'react-native';
import React, { useState } from 'react';
import App1 from './App1';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import App5 from './App5';

export default function App() {
  const [pantalla, setPantalla] = useState(null);

  return (
    <View style={styles.container}>
      {pantalla === 'App1' && <App1 />}
      {pantalla === 'App2' && <App2 />}
      {pantalla === 'App3' && <App3 />}
      {pantalla === 'App4' && <App4 />}
      {pantalla === 'App5' && <App5 />}
      {pantalla === null && (
        <>
          <Button title="Edad" onPress={() => setPantalla('App1')} />
          <Button title="Análisis de Números" onPress={() => setPantalla('App2')} />
          <Button title="Nueva Funcionalidad" onPress={() => setPantalla('App3')} />
          <Button title="Análisis de Notas" onPress={() => setPantalla('App4')} />
          <Button title="Nueva Sección" onPress={() => setPantalla('App5')} />
        </>
      )}
      {pantalla !== null && <Button title="Volver" onPress={() => setPantalla(null)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }
});

import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

export default function App5() {
  const [edad, setEdad] = useState('');
  const [mensaje, setMensaje] = useState('');

  const verificarEdad = () => {
    const edadNum = parseInt(edad, 10);

    if (isNaN(edadNum) || edadNum < 0 || edadNum > 120) {
      setMensaje('Error: Ingrese una edad válida entre 0 y 120.');
      return;
    }

    let resultado = '';
    if (edadNum === 18) resultado = 'Has alcanzado la mayoría de edad.';
    else if (edadNum === 60) resultado = 'Has llegado a la edad de jubilación.';
    else if (edadNum <= 11) resultado = 'Niñez';
    else if (edadNum <= 17) resultado = 'Adolescencia';
    else if (edadNum <= 59) resultado = 'Adultez';
    else resultado = 'Vejez';

    setMensaje(resultado);
  };

  return (
    <View style={styles.container}>
      <Text>Ingrese su edad:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={setEdad}
        placeholder="Edad"
      />
      <Button title="Verificar edad" onPress={verificarEdad} />
      {mensaje !== '' && <Text style={styles.resultado}>{mensaje}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  input: { width: '60%', height: 40, borderColor: '#ccc', borderWidth: 1, marginBottom: 10, textAlign: 'center' },
  resultado: { marginTop: 20, fontSize: 18, fontWeight: 'bold' }
});

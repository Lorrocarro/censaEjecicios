import { StyleSheet, Text, View, TextInput, Button, Picker } from 'react-native';
import React, { useState } from 'react';

export default function App3() {
  const [precio, setPrecio] = useState('');
  const [etiqueta, setEtiqueta] = useState('Negra');
  const [precioFinal, setPrecioFinal] = useState(null);

  // Definimos descuentos en un objeto
  const descuentos = {
    Roja: 0.40,
    Naranja: 0.30,
    Blanca: 0.15,
    Negra: 0
  };

  const calcularDescuento = () => {
    const total = parseFloat(precio) * (1 - descuentos[etiqueta]);
    setPrecioFinal(`Precio final: $${total.toFixed(2)}`);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ingrese el precio"
        keyboardType="numeric"
        onChangeText={setPrecio}
        value={precio}
      />
      
      <Picker selectedValue={etiqueta} onValueChange={setEtiqueta} style={styles.picker}>
        {Object.keys(descuentos).map(color => (
          <Picker.Item key={color} label={`${color} - ${descuentos[color] * 100}%`} value={color} />
        ))}
      </Picker>

      <Button title="Calcular Descuento" onPress={calcularDescuento} />

      {precioFinal && <Text style={styles.resultado}>{precioFinal}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  input: { width: '80%', height: 40, borderColor: '#ccc', borderWidth: 1, marginBottom: 12, paddingHorizontal: 8 },
  picker: { width: '80%', height: 50, marginBottom: 12 },
  resultado: { marginTop: 20, fontSize: 18, fontWeight: 'bold' },
});


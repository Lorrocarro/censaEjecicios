import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, {useState} from 'react';
export default function App() {
  // Estado para almacenar la fecha ingresada
  const [fecha, setFecha] = useState('');
  // Estado para almacenar el resultado de la edad
  const [resultado, setResultado] = useState(null);
/**
   * Función que realiza la edad de la fecha.
    * Convierte la fecha ingresada en un objeto Date y calcula la diferencia en años.
   */
const edad = () => {
  var hoy = new Date();
  var cumpleanos = new Date(fecha);
  var edad = hoy.getFullYear() - cumpleanos.getFullYear();

  setResultado("la edad es : "+edad);
};
  return (
    <View style={styles.container}> 
    <TextInput
        style={styles.input}
        placeholder="fecha de nacimiento mes/dia/año"
        onChangeText={setFecha}
        value={fecha}
      />
    {/* Botón que ejecuta la función edad al ser presionado */}
      <Button title="Edad" onPress={edad} />
      {/* Muestra el resultado si no es null */}
      {resultado !== null && (
        <Text style={styles.resultado}>Resultado: {resultado}</Text>
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
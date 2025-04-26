import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, {useState} from 'react';
export default function App2() {
    const [mayor, setMayor] = useState(0);
    const [menor, setMenor] = useState(999);
    const [suma, setSuma] = useState(0);
    const [cantidad, setCantidad] = useState(0);

  // Estado para almacenar el numero ingresada
  const [num, setNum] = useState('');
  // Estado para almacenar el resultado 
  const [resultado, setResultado] = useState(null);
/**
   * Función que realiza mayor menor y promedio.
     */
const comprobar = () => {
  if(num > mayor){ 
    setMayor(parseFloat(num));
  }
  if(num < menor){ 
    setMenor(parseFloat(num));
  }
        setSuma(suma + parseFloat(num));
        setCantidad(cantidad + 1);
setResultado("Ingrese el numero " + (cantidad + 2) + " de 10");
        if (cantidad + 1 == 10) {
            let promedio = suma / cantidad;
            setResultado("El mayor es: " + mayor + "\nEl menor es: " + menor + "\nEl promedio es: " + promedio);
        }
};
  return (
    <View style={styles.container}> 
    <TextInput
        style={styles.input}
        placeholder="Numero"
        onChangeText={setNum}
        value={num}
      />
    {/* Botón que ejecuta la función edad al ser presionado */}
      <Button title="Enviar" onPress={comprobar} />
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
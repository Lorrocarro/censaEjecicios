import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

export default function App4() {
  const [estudiantes, setEstudiantes] = useState(Array(5).fill({ nombre: '', bd: '', estadistica: '', informatica: '' }));
  const [resultado, setResultado] = useState('');

  const actualizarEstudiante = (index, campo, valor) => {
    setEstudiantes(estudiantes.map((est, i) => i === index ? { ...est, [campo]: valor } : est));
  };

  const calcularResultados = () => {
    let sumaInf = 0, aprobadosBD = 0, notaAltaEst = 0, notaBajaInf = Infinity, estudianteBajo = '';

    estudiantes.forEach(({ nombre, bd, estadistica, informatica }) => {
      const nBD = parseFloat(bd), nEst = parseFloat(estadistica), nInf = parseFloat(informatica);
      if (!isNaN(nBD) && nBD >= 3) aprobadosBD++;
      if (!isNaN(nEst) && nEst > notaAltaEst) notaAltaEst = nEst;
      if (!isNaN(nInf)) {
        sumaInf += nInf;
        if (nInf < notaBajaInf) [notaBajaInf, estudianteBajo] = [nInf, nombre];
      }
    });

    setResultado(`Promedio Informática: ${(sumaInf / 5).toFixed(2)}\nAprobados BD: ${aprobadosBD}\nNota más alta Estadística: ${notaAltaEst}\nNota más baja Informática: ${notaBajaInf} (Estudiante: ${estudianteBajo})`);
  };

  return (
    <View style={styles.container}>
      {estudiantes.map((_, i) => (
        <View key={i} style={styles.inputGroup}>
          {['nombre', 'bd', 'estadistica', 'informatica'].map(campo => (
            <TextInput key={campo} placeholder={campo} keyboardType={campo !== 'nombre' ? 'numeric' : 'default'} onChangeText={text => actualizarEstudiante(i, campo, text)} style={styles.input} />
          ))}
        </View>
      ))}
      <Button title="Calcular resultados" onPress={calcularResultados} />
      {resultado && <Text style={styles.resultado}>{resultado}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  inputGroup: { marginBottom: 10 },
  input: { width: '80%', height: 40, borderColor: '#ccc', borderWidth: 1, marginBottom: 5, paddingHorizontal: 8 },
  resultado: { marginTop: 20, fontSize: 16, fontWeight: 'bold' }
});

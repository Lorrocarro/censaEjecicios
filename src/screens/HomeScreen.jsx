import React from 'react';
import { View, Text } from 'react-native';
import Boton from '../../components/buttons/Boton';

const HomeScreen = ({ navigation }) => (
  <View>
    <Text>Bienvenido a la pantalla principal</Text>
    <Boton title="Ir al Perfil" onPress={() => navigation.navigate('ProfileScreen')} />
  </View>
);

export default HomeScreen;

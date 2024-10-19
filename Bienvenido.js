import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Registro() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('./assets/Bienvenido.jpeg')} // Asegúrate de que la ruta sea correcta
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>BIENVENIDO ESTUDIANTE</Text>
        <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('inicioSesion')}>

          <Text style={styles.buttonText}>Iniciar sesion</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('registro')}>
          
          <Text style={styles.buttonText}> Registrarte </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center', // Cambiar a flex-end para empujar los botones hacia abajo
    alignItems: 'center',
    padding: 5,
    marginBottom: 60, // Ajusta este valor según sea necesario
  },
  title: {
    fontSize: 28, // Tamaño de fuente del título
    fontWeight: 'bold',
    color: '#FFFFFF', // Color blanco
    marginBottom: 40, // Espacio ajustable entre el título y los botones
    paddingTop: 60
  },
  button: {
    backgroundColor: '#FFFFFF', // Color blanco para los botones
    paddingVertical: 15, // Padding vertical
    paddingHorizontal: 100, // Aumentar el padding horizontal para hacer el botón más largo
    borderRadius: 40,
    width: '100%', // Mantener el ancho del botón
    alignItems: 'center',
    marginVertical: 20, // Espacio entre los botones
    shadowColor: '#000', // Sombra del botón
    shadowOffset: {
      width: 0,
      height: 2,
      justifyContent: "center",
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3, // Elevación para Android
  },
  buttonText: {
    fontSize: 20, // Aumentar tamaño de texto del botón
    fontWeight: 'bold',
    color: '#393939', // Color del texto del botón
    textAlign: "center"
  },
});

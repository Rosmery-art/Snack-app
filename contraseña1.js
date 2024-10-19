import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TextInput, TouchableOpacity, TextInputComponent } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Registro() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('./assets/REGISTRO1.jpeg')} // Asegúrate de que la ruta sea correcta
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>OLVIDE MI CONTRASEÑA</Text>
        <Text style={styles.texto}>Ingrese su dirección de correo electronico</Text>
        
       {/* Campo para el Email */}
      <TextInput
        style={styles.input}
        placeholder="    Email    " // Texto de ejemplo
        keyboardType="email-address" // Teclado específico para email
        autoCapitalize="none" // Evitar capitalización automática
      />
      

<TouchableOpacity style={styles.button}
onPress={() => navigation.navigate('contraseña2')}>
        <Text style={styles.buttonText}>ENVIAR</Text>
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
    padding: 2,
    marginBottom: 140, // Ajusta este valor según sea necesario
    overflow: 'hidden',
  },
  texto: {
    fontSize: 20, // Tamaño de fuente del título
    fontWeight: 'bold',
    color: '#FFFFFF', // Color blanco
    marginBottom: 20, // Espacio ajustable entre el título y los botones
    paddingTop:10,
    textAlign: 'center'
  },
  title: {
    fontSize: 28, // Tamaño de fuente del título
    fontWeight: 'bold',
    color: '#FFFFFF', // Color blanco
    marginBottom: 40, // Espacio ajustable entre el título y los botones
    paddingTop: 100
  },
  input: {
    backgroundColor: '#FFFFFF', // Color blanco para los botones
    paddingVertical: 12, // Padding vertical
    paddingHorizontal: 100, // Aumentar el padding horizontal para hacer el botón más largo
    borderRadius: 40,
    width: 280, // Mantener el ancho del botón
    maxWidth: 280,
    alignItems: 'center',
    marginVertical: 15, // Espacio entre los botones
    shadowColor: '#000', // Sombra del botón
    overflow: 'hidden',
    shadowOffset: {
      width: 0,
      height: 2,
      justifyContent: "center",
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3, // Elevación para Android
  },
  button: {
    backgroundColor: '#FFFFFF', // Color blanco para los botones
    paddingVertical: 12, // Padding vertical
    paddingHorizontal: 40, // Aumentar el padding horizontal para hacer el botón más largo
    borderRadius: 40,
    width: '100%', // Mantener el ancho del botón
    alignItems: 'center',
    marginVertical: 25, // Espacio entre los botones
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
    fontSize: 15, // Aumentar tamaño de texto del botón
    fontWeight: 'bold',
    color: '#393939', // Color del texto del botón
    textAlign: "center"
  },
  infoText: {
    fontSize: 18, // Aumentar tamaño de texto del botón
    fontWeight: 'bold',
    color: '#ffffff', // Color del texto del botón
    textAlign: "center"
  },
   
});

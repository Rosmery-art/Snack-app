import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registro from './Ingresar.js';
import Bienvenido from './Bienvenido.js';
import inicioSesion from './inicioSesion.js';
import registro from './registro.js';
import menu from './menu.js';
import perfil from './perfil.js';
import registrom from './registrom.js';
import bienvenido2 from './bienvenido2.js';
import menu2 from './menu2.js';
import inicioSesion2 from './inicioSesion2.js';
import anuncios from './anuncios.js';
import contraseña from './contraseña1.js';
import contraseña2 from './contraseña2.js';
import contraseña3 from './contraseña3.js'; 
import si from '.si.js';
import no from ',no.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Bienvenido" component={Bienvenido} />
        <Stack.Screen name="inicioSesion" component={inicioSesion} />
        <Stack.Screen name="registro" component={registro} />
        <Stack.Screen name="menu" component={menu} />
        <Stack.Screen name="perfil" component={perfil} />
        <Stack.Screen name="registrom" component={registrom} />
        <Stack.Screen name="bienvenido2" component={bienvenido2} />
        <Stack.Screen name="menu2" component={menu2} />
        <Stack.Screen name="inicioSesion2" component={inicioSesion2} />
        <Stack.Screen name="anuncios" component={anuncios} />
        <Stack.Screen name="contraseña" component={contraseña}/>
        <Stack.Screen name="contraseña2" component={contraseña2}/>
        <Stack.Screen name="contraseña3" component={contraseña3}/>
        <Stack.Screen name="si" component={si}/>
        <Stack.Screen name="no" component={no}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('./assets/INICIO.jpeg')}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Título centrado en la parte superior */}
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Snack Escolar</Text>
      </View>

      {/* Botón colocado justo antes de la curva */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Registro')}>
          <Text style={styles.buttonText}>CONTINUAR</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 350, // Ajusta la distancia del título respecto al borde superior
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'Lilita One1',
    color: '#670010', // Color del título
    textAlign: 'center',

  },
  buttonContainer: {
    position: 'absolute',
    bottom: 180, // Ajusta la posición del botón para que quede bien con la curva
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#D3D3D3', // Color gris suave
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderWidth: 2, // Grosor del borde
    borderColor: '#FFFFFF', // Color del borde
    shadowColor: '#000', // Sombra
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.5,
    elevation: 5, // Para Android
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000', // Color del texto en negro
    textAlign: 'center',
  },
}); 

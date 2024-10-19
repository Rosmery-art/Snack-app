import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList, Alert, ImageBackground, Image } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

export default function TablonDeAnuncios() {
  const [anuncio, setAnuncio] = useState('');
  const [anuncios, setAnuncios] = useState([]);
  const [selectedIcon, setSelectedIcon] = useState('anuncios'); // Estado para manejar el ícono seleccionado
  const navigation = useNavigation();

  const agregarAnuncio = () => {
    if (anuncio.trim() === '') {
      Alert.alert('Error', 'Por favor, ingresa un anuncio.');
      return;
    }
    setAnuncios([...anuncios, anuncio]);
    setAnuncio('');
  };

  const borrarAnuncio = (index) => {
    Alert.alert(
      'Confirmar',
      '¿Estás seguro de que deseas borrar este anuncio?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Borrar', onPress: () => {
          const nuevosAnuncios = anuncios.filter((_, i) => i !== index);
          setAnuncios(nuevosAnuncios);
        }},
      ],
      { cancelable: false }
    );
  };

  // Utilizamos useFocusEffect para restablecer el ícono seleccionado al regresar a la pantalla del menú
  useFocusEffect(
    useCallback(() => {
      setSelectedIcon('anuncios'); // Restablece el ícono al regresar a la pantalla
    }, [])
  );

  return (
    <ImageBackground
      source={require('./assets/perfil.png')} // Verifica que esta ruta sea correcta
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>TABLÓN DE ANUNCIOS</Text>

        <TextInput
          style={styles.input}
          placeholder="Agregar un nuevo anuncio"
          value={anuncio}
          onChangeText={setAnuncio}
        />

        <TouchableOpacity style={styles.button} onPress={agregarAnuncio}>
          <Text style={styles.buttonText}>AGREGAR ANUNCIO</Text>
        </TouchableOpacity>

        <FlatList
          data={anuncios}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.anuncioContainer}>
              <Text style={styles.anuncioText}>{item}</Text>
              <TouchableOpacity onPress={() => borrarAnuncio(index)}>
                <Text style={styles.borrarText}>Borrar</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      {/* Íconos en la parte inferior */}
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => { setSelectedIcon('home'); navigation.navigate('menu2'); }}>
          <View style={styles.iconWrapper}>
            <Image source={require('./assets/home.jpg')} style={styles.icon} />
            {selectedIcon === 'home' && <View style={styles.overlay} />}
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setSelectedIcon('perfil'); navigation.navigate('perfilm'); }}>
          <View style={styles.iconWrapper}>
            <Image source={require('./assets/user.jpg')} style={styles.icon} />
            {selectedIcon === 'perfil' && <View style={styles.overlay} />}
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setSelectedIcon('anuncios'); navigation.navigate('anuncios2'); }}>
          <View style={styles.iconWrapper}>
            <Image source={require('./assets/campana.jpg')} style={styles.icon} />
            {selectedIcon === 'anuncios' && <View style={styles.overlay} />}
          </View>
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
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    paddingTop: 100,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 40,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    borderRadius: 40,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#393939',
    textAlign: 'center',
  },
  anuncioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  anuncioText: {
    fontSize: 16,
    color: '#393939',
  },
  borrarText: {
    color: 'red',
    fontWeight: 'bold',
  },
  iconContainer: {
    position: 'absolute',
    bottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
  },
  iconWrapper: {
    position: 'relative',
  },
  icon: {
    width: 40,
    height: 40,
  },
  overlay: {
    position: 'absolute',
    top: -5, // Ajustado para que el círculo no sobresalga
    left: -5,
    right: -5,
    bottom: -5,
    borderRadius: 50, // Hacer el círculo más grande y redondeado
    backgroundColor: 'rgba(255, 0, 0, 0.4)', // Círculo semitransparente rojo
  },
});

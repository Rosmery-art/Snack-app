import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList, Alert, ImageBackground, Image } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { db } from './anunciosConfig'; 
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';

export default function TablonDeAnuncios() {
  const [anuncio, setAnuncio] = useState('');
  const [anuncios, setAnuncios] = useState([]);
  const [selectedIcon, setSelectedIcon] = useState('anuncios'); 
  const navigation = useNavigation();
  const anunciosRef = collection(db, 'anuncios'); 

  // Cargar anuncios desde Firestore
  const loadAnuncios = async () => {
    try {
      const querySnapshot = await getDocs(anunciosRef);
      const anunciosList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setAnuncios(anunciosList);
    } catch (error) {
      console.error("Error loading announcements: ", error);
    }
  };

  // Agregar un nuevo anuncio a Firestore
  const agregarAnuncio = async () => {
    if (anuncio.trim() === '') {
      Alert.alert('Error', 'Por favor, ingresa un anuncio.');
      return;
    }
    try {
      await addDoc(anunciosRef, { texto: anuncio });
      setAnuncio(''); // Limpia el input
      await loadAnuncios(); // Vuelve a cargar los anuncios
    } catch (error) {
      console.error("Error adding announcement: ", error);
      Alert.alert('Error', 'No se pudo agregar el anuncio.');
    }
  };

  // Borrar un anuncio de Firestore
  const borrarAnuncio = async (id) => {
    Alert.alert(
      'Confirmar',
      '¿Estás seguro de que deseas borrar este anuncio?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Borrar', onPress: async () => {
          try {
            await deleteDoc(doc(db, 'anuncios', id)); // Borra el anuncio por ID
            await loadAnuncios(); // Vuelve a cargar los anuncios
          } catch (error) {
            console.error("Error deleting announcement: ", error);
            Alert.alert('Error', 'No se pudo borrar el anuncio.');
          }
        }},
      ],
      { cancelable: false }
    );
  };

  // Cargar anuncios cuando el componente se monta
  useEffect(() => {
    loadAnuncios();
  }, []);

  // Restablece el ícono seleccionado al regresar a la pantalla del menú
  useFocusEffect(
    useCallback(() => {
      setSelectedIcon('anuncios');
    }, [])
  );

  return (
    <ImageBackground
      source={require('./assets/perfil.png')} 
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
          keyExtractor={(item) => item.id} 
          renderItem={({ item }) => (
            <View style={styles.anuncioContainer}>
              <Text style={styles.anuncioText}>{item.texto}</Text>
              <TouchableOpacity onPress={() => borrarAnuncio(item.id)}>
                <Text style={styles.borrarText}>Borrar</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      {/* Íconos en la parte inferior */}
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => { setSelectedIcon('home'); navigation.navigate('menu'); }}>
          <View style={styles.iconWrapper}>
            <Image source={require('./assets/home.jpg')} style={styles.icon} />
            {selectedIcon === 'home' && <View style={styles.overlay} />}
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setSelectedIcon('perfil'); navigation.navigate('perfil'); }}>
          <View style={styles.iconWrapper}>
            <Image source={require('./assets/user.jpg')} style={styles.icon} />
            {selectedIcon === 'perfil' && <View style={styles.overlay} />}
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setSelectedIcon('anuncios'); navigation.navigate('anuncios'); }}>
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
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 0, 0, 0.5)', // Círculo rojo
  },
});

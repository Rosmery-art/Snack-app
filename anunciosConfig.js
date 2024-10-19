// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app"; // Asegúrate de importar getApp
import { getFirestore } from "firebase/firestore"; 

// Your web app's Firebase configuration
const anunciosConfig = {
  apiKey: "AIzaSyAnYtGzhuFT9aF31lXDcATkUqqnWeZ4PZc",
  authDomain: "anuncios-821a8.firebaseapp.com",
  projectId: "anuncios-821a8",
  storageBucket: "anuncios-821a8.appspot.com",
  messagingSenderId: "278954628153",
  appId: "1:278954628153:web:1cf4e946c9da9f97d5e9e8"
};

// Inicializar Firebase solo si no ha sido inicializado antes
let app;

try {
  // Verificar si ya hay aplicaciones inicializadas
  if (getApps().length === 0) {
    app = initializeApp(anunciosConfig);
  } else {
    app = getApp(); // Obtener la instancia de la app existente
  }
} catch (error) {
  console.error("Error initializing Firebase", error);
}

// Inicializar Firestore
const db = getFirestore(app);

export { db }; // Exportar la base de datos

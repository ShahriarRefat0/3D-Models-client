// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpZJ7RPi_3Fqk13cyHE3u816SpSRBEAXs",
  authDomain: "d-model-5ccae.firebaseapp.com",
  projectId: "d-model-5ccae",
  storageBucket: "d-model-5ccae.firebasestorage.app",
  messagingSenderId: "276488996964",
  appId: "1:276488996964:web:db6215ca945b3618913771",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
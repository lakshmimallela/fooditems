import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCO5rfY0Pz_C62W2gQ3ReigNZPhv2P9FNg",
  authDomain: "react-e326f.firebaseapp.com",
  projectId: "react-e326f",
  storageBucket: "react-e326f.appspot.com",
  messagingSenderId: "793688527023",
  appId: "1:793688527023:web:5fe9138205c2a97546845a",
  measurementId: "G-6DFDH8DB81"
};


  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export {auth,db}
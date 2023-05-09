import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAWI9LzuUfubKaeg5F1msw39BGm_HaaoTQ",
  authDomain: "quitter-20483.firebaseapp.com",
  projectId: "quitter-20483",
  storageBucket: "quitter-20483.appspot.com",
  messagingSenderId: "511431370706",
  appId: "1:511431370706:web:eab2f6f1a0dff2bad54a0b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// access firebase database with db variable
const db = firebase.firestore()


export default db


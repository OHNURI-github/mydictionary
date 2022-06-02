// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAdIbkbI-2tqkdBSTDiydfmF_189luLUn0',
  authDomain: 'hh99-w04-project.firebaseapp.com',
  projectId: 'hh99-w04-project',
  storageBucket: 'hh99-w04-project.appspot.com',
  messagingSenderId: '1067530007666',
  appId: '1:1067530007666:web:ecc6e6dbade46b287c3eeb',
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();

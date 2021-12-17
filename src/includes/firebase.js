import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCL0HK8jnrztoXPObHv2uwO2IVOtLsD5WQ',
  authDomain: 'sky-music-54d78.firebaseapp.com',
  projectId: 'sky-music-54d78',
  storageBucket: 'sky-music-54d78.appspot.com',
  messagingSenderId: '279434845795',
  appId: '1:279434845795:web:89622ef96de0965ce2e256',
};

// Initialize firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection('users');
export { auth, db, usersCollection };

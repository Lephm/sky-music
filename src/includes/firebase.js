import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

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

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

const storage = firebase.storage();

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  storage,
  commentsCollection,
};

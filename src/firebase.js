import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDjgcHn5zlBHiAa6zT3waZ8AndeKsVjys0',
  authDomain: 'netflix-clone-e05e7.firebaseapp.com',
  projectId: 'netflix-clone-e05e7',
  storageBucket: 'netflix-clone-e05e7.appspot.com',
  messagingSenderId: '539600815264',
  appId: '1:539600815264:web:805b94b3639a23cbf535c5',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;

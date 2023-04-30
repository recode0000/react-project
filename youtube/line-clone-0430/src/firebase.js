import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCCNGRWbj05s2mq244E9h3HpZXTnUTHcVg",
  authDomain: "line-clone-3b9bf.firebaseapp.com",
  projectId: "line-clone-3b9bf",
  storageBucket: "line-clone-3b9bf.appspot.com",
  messagingSenderId: "571972126222",
  appId: "1:571972126222:web:69db64246bc685d8e51e5f"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
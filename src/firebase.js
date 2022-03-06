import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDpB6m1gqRFs5RhNae5MOEsSU1HCJtBWmk",
    authDomain: "quora-ba3b7.firebaseapp.com",
    projectId: "quora-ba3b7",
    storageBucket: "quora-ba3b7.appspot.com",
    messagingSenderId: "902249090675",
    appId: "1:902249090675:web:d8d85d267924c2a7476406",
    measurementId: "G-2QYQZ9PLCR"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBZb18oltmmHoh68gr-l7NJv-WikG_m3cU",
  authDomain: "crowndb-572cf.firebaseapp.com",
  projectId: "crowndb-572cf",
  storageBucket: "crowndb-572cf.appspot.com",
  messagingSenderId: "110466922307",
  appId: "1:110466922307:web:a2c378598fd86014bda1f6",
  measurementId: "G-DRZ13VL363",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

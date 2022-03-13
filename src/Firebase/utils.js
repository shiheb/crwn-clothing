import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyD1YYDwSP1ZYB4O8gGgz3WiRKE-XrpSzhs",
  authDomain: "crwn-db-f3860.firebaseapp.com",
  projectId: "crwn-db-f3860",
  storageBucket: "crwn-db-f3860.appspot.com",
  messagingSenderId: "845550959610",
  appId: "1:845550959610:web:2eda6e9ac52f8227404243",
  measurementId: "G-6T6HNF314P",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

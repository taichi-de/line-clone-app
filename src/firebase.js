import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD1hnURmcfn9VwhgZOyX_9qyrZ25xH_f-E",
  authDomain: "line-clone-app-56343.firebaseapp.com",
  projectId: "line-clone-app-56343",
  storageBucket: "line-clone-app-56343.appspot.com",
  messagingSenderId: "9488546851",
  appId: "1:9488546851:web:2ef8f2b6fbe882659b0596"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};
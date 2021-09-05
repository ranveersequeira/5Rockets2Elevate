// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd4MV2mcb8huL3rnc6STqKXErRmqT7y3A",
  authDomain: "whatsapp-clone-d35c4.firebaseapp.com",
  projectId: "whatsapp-clone-d35c4",
  storageBucket: "whatsapp-clone-d35c4.appspot.com",
  messagingSenderId: "386983675699",
  appId: "1:386983675699:web:b852aa660a003d3b132046",
  measurementId: "G-TK03WWHL4B",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage().ref("images");
const audioStorage = firebase.storage().ref("audios");
const createTimestamp = firebase.firestore.FieldValue.serverTimestamp;
const serverTimestamp = firebase.database.ServerValue.TIMESTAMP;

export {
  db,
  auth,
  provider,
  storage,
  createTimestamp,
  serverTimestamp,
  audioStorage,
};

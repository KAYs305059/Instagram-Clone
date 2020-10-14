import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAlu8cEiB4XWoFZOUbpM68GT21h-SLZZts",
    authDomain: "instagram-clone-kay.firebaseapp.com",
    databaseURL: "https://instagram-clone-kay.firebaseio.com",
    projectId: "instagram-clone-kay",
    storageBucket: "instagram-clone-kay.appspot.com",
    messagingSenderId: "611013915180",
    appId: "1:611013915180:web:3ac54d847dfd06a3261789",
    measurementId: "G-ZN8SWZDD6V"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage}; 
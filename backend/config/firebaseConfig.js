// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getFirestore } = require('firebase/firestore');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsj0c6PCpgTs6jXzdiEpKGMOic4D6UzIQ",
  authDomain: "employeeapp-ba270.firebaseapp.com",
  projectId: "employeeapp-ba270",
  storageBucket: "employeeapp-ba270.appspot.com",
  messagingSenderId: "618091069393",
  appId: "1:618091069393:web:eb33c04cf08cef1d0a6af0",
  measurementId: "G-DDP7VLJNSD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
module.exports = { db };

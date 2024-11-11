// src/firebase.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
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
const analytics = getAnalytics(app);

export default app; // Optional: export the app for use in other files

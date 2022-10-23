// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP1SHQvDswK4r90_Q2k3pfRJjgj6SVMvI",
  authDomain: "dubhacks2022-91ed5.firebaseapp.com",
  projectId: "dubhacks2022-91ed5",
  storageBucket: "dubhacks2022-91ed5.appspot.com",
  messagingSenderId: "676659808821",
  appId: "1:676659808821:web:a72d025e8cb75be3eabf7c",
  measurementId: "G-SPEJ00K88K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firebase = require("firebase");

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

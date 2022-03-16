// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsnjftBAxztckqMB2RN0OXClDr1XEj4FY",
  authDomain: "booking-room-dbc3f.firebaseapp.com",
  projectId: "booking-room-dbc3f",
  storageBucket: "booking-room-dbc3f.appspot.com",
  messagingSenderId: "682361462434",
  appId: "1:682361462434:web:879c7c0fe4de9e6d7ac1fb",
  measurementId: "G-77M16VP119"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;

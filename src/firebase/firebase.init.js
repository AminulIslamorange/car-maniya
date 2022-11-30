// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDcv7NfPIEjGFN-hDKc40t9W8ultJ-GRio",
    authDomain: "carmania-client-main.firebaseapp.com",
    projectId: "carmania-client-main",
    storageBucket: "carmania-client-main.appspot.com",
    messagingSenderId: "454484807557",
    appId: "1:454484807557:web:338e1a398b3beedac1feec"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
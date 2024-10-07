// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs0TqrDNFZAOjIkqRmqZHCQ39QP3ItOow",
  authDomain: "coffee-store-4c1c5.firebaseapp.com",
  projectId: "coffee-store-4c1c5",
  storageBucket: "coffee-store-4c1c5.appspot.com",
  messagingSenderId: "205307957552",
  appId: "1:205307957552:web:e34bffacfe538f43a9b8f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
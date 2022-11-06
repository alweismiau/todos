// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm7EGeLmhEpQ6L36HJL0kgB04S5mPqLG0",
  authDomain: "vuetodolist-a4c06.firebaseapp.com",
  projectId: "vuetodolist-a4c06",
  storageBucket: "vuetodolist-a4c06.appspot.com",
  messagingSenderId: "511537297565",
  appId: "1:511537297565:web:e7a74ae51ce237b6f63c74",
  measurementId: "G-E2C8TMMH7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const projectFirestore = firebase.firestore();
export {projectFirestore};
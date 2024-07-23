// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqBZyfidE7BTn0OXN19nL-j3_W-TRt8KA",
  authDomain: "netflix-gpt-56e97.firebaseapp.com",
  projectId: "netflix-gpt-56e97",
  storageBucket: "netflix-gpt-56e97.appspot.com",
  messagingSenderId: "736829513324",
  appId: "1:736829513324:web:21b2904a7de4a672c10249",
  measurementId: "G-YXVN6K8YJ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
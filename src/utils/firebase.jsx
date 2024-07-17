// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEVUzrk5kvvBQ28J94BE-o88g8F6uI0Q4",
  authDomain: "netflix-gpt-290d7.firebaseapp.com",
  projectId: "netflix-gpt-290d7",
  storageBucket: "netflix-gpt-290d7.appspot.com",
  messagingSenderId: "765450321530",
  appId: "1:765450321530:web:24e6793f214f0dd423c5c3",
  measurementId: "G-4HP9574RH6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

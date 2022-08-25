// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqevPZQy-_wOqL1j8CThjL1ndWqtR8hrI",
  authDomain: "ema-john-simple-a462f.firebaseapp.com",
  projectId: "ema-john-simple-a462f",
  storageBucket: "ema-john-simple-a462f.appspot.com",
  messagingSenderId: "1055391665917",
  appId: "1:1055391665917:web:457e951f68157953363894"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
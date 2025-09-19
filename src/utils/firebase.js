// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkUluyPLBpvowe2DThzcSS0Lz_McRm0O0",
  authDomain: "jollywood-87c1a.firebaseapp.com",
  projectId: "jollywood-87c1a",
  storageBucket: "jollywood-87c1a.firebasestorage.app",
  messagingSenderId: "1015440254090",
  appId: "1:1015440254090:web:401522221004e0cfdeb973",
  measurementId: "G-28BK944EBL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

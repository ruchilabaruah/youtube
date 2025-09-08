// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt17ogW_3oaKLBQSTjyPURVGw12yr8YVg",
  authDomain: "ruchila-yt.firebaseapp.com",
  projectId: "ruchila-yt",
  storageBucket: "ruchila-yt.firebasestorage.app",
  messagingSenderId: "662549417378",
  appId: "1:662549417378:web:872e0a4e59b6fb2a9cb6fb",
  measurementId: "G-S2NPGKBBJQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
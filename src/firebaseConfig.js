// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA5AlRAFWpC_vOlXMhOZoGSdkthAc0EV3A",
  authDomain: "talentos-beach-resort.firebaseapp.com",
  projectId: "talentos-beach-resort",
  storageBucket: "talentos-beach-resort.firebasestorage.app",
  messagingSenderId: "817333684444",
  appId: "1:817333684444:web:d9eaa385e8cd0d93988c19",
  measurementId: "G-HYHFTZ16DV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBeRACaCa_K2sHAQAocqXkLLJDAceGe20I",
    authDomain: "acmwebsite-d5101.firebaseapp.com",
    projectId: "acmwebsite-d5101",
    storageBucket: "acmwebsite-d5101.firebasestorage.app",
    messagingSenderId: "482986265650",
    appId: "1:482986265650:web:ba229a43b849b5c621c02b",
    measurementId: "G-PDP5NTQ2EW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };

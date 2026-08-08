// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-analytics.js";
import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5S95u-sOWusQBxA7k6LKf0mPoB8vT-8s",
    authDomain: "himalayan-logic.firebaseapp.com",
    projectId: "himalayan-logic",
    storageBucket: "himalayan-logic.firebasestorage.app",
    messagingSenderId: "162767254891",
    appId: "1:162767254891:web:9868084bd7453e90eac82e",
    measurementId: "G-FTXKVPTPW6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

// Export Firestore
export { db, collection, addDoc, serverTimestamp };

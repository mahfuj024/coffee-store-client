// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjo0KsBv8m9CGN1AOjdsUDnUHV_niZizI",
    authDomain: "coffee-store-app-17a6c.firebaseapp.com",
    projectId: "coffee-store-app-17a6c",
    storageBucket: "coffee-store-app-17a6c.firebasestorage.app",
    messagingSenderId: "840307640381",
    appId: "1:840307640381:web:c1e6b2be3b2c11565f0254"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
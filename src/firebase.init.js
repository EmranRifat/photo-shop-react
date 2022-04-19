// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMNuDIYsWFsV6gGjVZSw8t5rmTDIXTJqs",
    authDomain: "photo-studio-f6d45.firebaseapp.com",
    projectId: "photo-studio-f6d45",
    storageBucket: "photo-studio-f6d45.appspot.com",
    messagingSenderId: "387398573115",
    appId: "1:387398573115:web:b52685f2fc9f90071fd01e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
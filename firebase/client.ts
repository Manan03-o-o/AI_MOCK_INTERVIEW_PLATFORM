import { initializeApp,getApp,getApps } from "firebase/app";
import{getAuth} from "firebase/auth";
import{getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyBn7AD_Zrvw238EGD2b1ltYHsPmUUQbyZ0",
    authDomain: "prepify-9d148.firebaseapp.com",
    projectId: "prepify-9d148",
    storageBucket: "prepify-9d148.firebasestorage.app",
    messagingSenderId: "1099506781732",
    appId: "1:1099506781732:web:099073c803b09fed8052b1",
    measurementId: "G-8J8DMYNYYF"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig):getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);

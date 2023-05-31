// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {
    getAuth
} from "firebase/auth";
import {
    getFirestore
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getStorage
} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNrRXEmCW7znp0Y4DviiKjKSdLhOR9YHE",
    authDomain: "pharmacy-c8362.firebaseapp.com",
    projectId: "pharmacy-c8362",
    storageBucket: "pharmacy-c8362.appspot.com",
    messagingSenderId: "705775100065",
    appId: "1:705775100065:web:503cdb582fbbd7f55590e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//initialize firebase auth
const auth = getAuth(app);
const db = getFirestore(app)
const storage = getStorage(app);
export {
    auth,
    db,
    storage
}
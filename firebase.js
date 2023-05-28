import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCLAw1pLyr-kqieHJEiNAHZ2jaPv41vDXc",
    authDomain: "insta-clone-48a90.firebaseapp.com",
    projectId: "insta-clone-48a90",
    storageBucket: "insta-clone-48a90.appspot.com",
    messagingSenderId: "91227136342",
    appId: "1:91227136342:web:6f193c1f95e11c237076f7"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth();
export const db = getFirestore(app);
export default app;
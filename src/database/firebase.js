import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4CMDmz6yszVMTog_-d1wpARJPO9AwJXc",
    authDomain: "react-mr-burger-queen.firebaseapp.com",
    projectId: "react-mr-burger-queen",
    storageBucket: "react-mr-burger-queen.appspot.com",
    messagingSenderId: "889441593030",
    appId: "1:889441593030:web:0b3cc40d4971771e0b19c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

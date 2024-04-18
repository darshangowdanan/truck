import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDMLfjRyqem78ju5cGyAAEKE7Kbc1PlvGU",
    authDomain: "truck-rental-services.firebaseapp.com",
    projectId: "truck-rental-services",
    storageBucket: "truck-rental-services.appspot.com",
    messagingSenderId: "536898956029",
    appId: "1:536898956029:web:d76eeb53d57092b57c2c94",
    measurementId: "G-S674PSKDQB"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
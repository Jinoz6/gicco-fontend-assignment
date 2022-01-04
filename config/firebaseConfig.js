// Import the functions you need from the SDKs you need
import firebase from "firebase/app";


const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

// Initialize Firebase

if (!firebase.apps.length) {

    firebase.initializeApp(firebaseConfig);

}


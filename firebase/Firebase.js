import * as firebase from 'firebase/Firebase';
import { getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDfSk2ThHJsqwgsVL6fe6QDte0iwMwxkXw",
    authDomain: "fir-healthy-habits-96cbe.firebaseapp.com",
    projectId: "fir-healthy-habits-96cbe",
    storageBucket: "fir-healthy-habits-96cbe.appspot.com",
    messagingSenderId: "397343922276",
    appId: "1:397343922276:web:987e9c078f5e6a9ea82771"
}

if (!getApps().length) {
    initializeApp(firebaseConfig);
}

export {firebase}
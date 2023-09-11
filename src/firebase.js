// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {initializeApp} from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAH42EQ8d1xlCf0E49vYAH-kuioPOFJHuw",
  authDomain: "clone-f875b.firebaseapp.com",
  projectId: "clone-f875b",
  storageBucket: "clone-f875b.appspot.com",
  messagingSenderId: "348552294331",
  appId: "1:348552294331:web:b9d907d39fc6c7bd4a9e9e",
  measurementId: "G-GMM5M907LG"
};

export const firebaseApp = initializeApp(firebaseConfig);

export const database = getFirestore(firebaseApp);

export const auth = getAuth(firebaseApp);


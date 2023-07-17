


import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBWj0c1PV1Wr2YEh45RasXSWpgD3tLjzrg",
  authDomain: "chat2-6c353.firebaseapp.com",
  projectId: "chat2-6c353",
  storageBucket: "chat2-6c353.appspot.com",
  messagingSenderId: "194243624927",
  appId: "1:194243624927:web:da81c5d5736dc7a6e54e6a"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const storage = getStorage();
export const db=getFirestore();
// const analytics = getAnalytics(app);

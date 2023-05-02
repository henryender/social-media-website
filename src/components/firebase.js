import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {

  apiKey: "AIzaSyBQcQUzqczWMur99u1aacODdgTnpUN9tT0",

  authDomain: "social-media-app-c3e1b.firebaseapp.com",

  projectId: "social-media-app-c3e1b",

  storageBucket: "social-media-app-c3e1b.appspot.com",

  messagingSenderId: "848112379432",

  appId: "1:848112379432:web:77c7e1e5b5079838f4b71d",

};

 export const app = initializeApp(firebaseConfig);
 export const db= getFirestore(app)
 export const auth= getAuth(app)
 export const storage= getStorage(app)


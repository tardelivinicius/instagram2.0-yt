import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBrKVXWnV5_tFRGvsRL6iuM2gXZbRSIqVk",
    authDomain: "instagram-2-yt-81891.firebaseapp.com",
    projectId: "instagram-2-yt-81891",
    storageBucket: "instagram-2-yt-81891.appspot.com",
    messagingSenderId: "718860542969",
    appId: "1:718860542969:web:c033b9d62647887ae05328",
    measurementId: "G-21W6H5VTF3"
  };

  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  const db = getFirestore();
  const storage = getStorage();

  export { app, db, storage };
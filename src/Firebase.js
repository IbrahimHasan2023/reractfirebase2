import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuuGYtJUjx6gvlpQH4N88tDJ3EPU2ujpI",
  authDomain: "autreact.firebaseapp.com",
  databaseURL:
    "https://autreact-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "autreact",
  storageBucket: "autreact.appspot.com",
  messagingSenderId: "200535398067",
  appId: "1:200535398067:web:7bd3c940c609a0c3bc42c6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, db, storage, auth };

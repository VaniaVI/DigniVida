// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_DOMINIO.firebaseapp.com",
  projectId: "dignivida",
  storageBucket: "dignivida.appspot.com",
  messagingSenderId: "XXXXXXXX",
  appId: "TU_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

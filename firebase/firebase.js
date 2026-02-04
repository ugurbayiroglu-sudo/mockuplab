// firebase/firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDyr9GGkgPvSK0RFpb5cuo1Q_RReywul7Y",
  authDomain: "testmygithub-3d0ef.firebaseapp.com",
  projectId: "testmygithub-3d0ef",
  storageBucket: "testmygithub-3d0ef.firebasestorage.app",
  messagingSenderId: "1046934952879",
  appId: "1:1046934952879:web:3785577abff8c69d1bed5a"
};

// Firebase başlat
const app = initializeApp(firebaseConfig);

// Servisleri dışa aktar
export const auth = getAuth(app);
export const db = getFirestore(app);


// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDyr9GGkgPvSK0RFpb5cuo1Q_RReywul7Y",
  authDomain: "testmygithub-3d0ef.firebaseapp.com",
  projectId: "testmygithub-3d0ef",
  storageBucket: "testmygithub-3d0ef.firebasestorage.app",
  messagingSenderId: "1046934952879",
  appId: "1:1046934952879:web:3785577abff8c69d1bed5a"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


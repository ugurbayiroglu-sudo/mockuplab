import { auth, db } from "../firebase/firebase.js";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

import {
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

// ✅ SADECE ADMIN EMAIL
const ADMIN_EMAIL = "ugurbayiroglu@gmail.com";

// Google login
export async function googleLogin() {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  await saveUser(result.user);
}

// Email login
export async function emailLogin(email, password) {
  const result = await signInWithEmailAndPassword(auth, email, password);
  await redirectByRole(result.user);
}

// Email register (okuyucular)
export async function emailRegister(email, password) {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  await saveUser(result.user);
}

async function saveUser(user) {
  const role = user.email === ADMIN_EMAIL ? "admin" : "user";

  await setDoc(doc(db, "users", user.uid), {
    email: user.email,
    role: role
  });

  redirectByRole(user);
}

async function redirectByRole(user) {
  const snap = await getDoc(doc(db, "users", user.uid));
  if (!snap.exists()) return;

  if (snap.data().role === "admin") {
    window.location.href = "admin.html";
  } else {
    window.location.href = "index.html";
  }
}


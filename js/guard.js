// js/guard.js
import { auth } from "./firebase.js";
import { onAuthStateChanged } from
  "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

const ADMIN_EMAIL = "ugurbayiroglu@gmail.com";

onAuthStateChanged(auth, (user) => {
  if (!user || user.email !== ADMIN_EMAIL) {
    window.location.href = "login.html";
  }
});


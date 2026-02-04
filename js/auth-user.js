import { auth } from "./firebase.js";
import { GoogleAuthProvider, signInWithPopup } from
  "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

const provider = new GoogleAuthProvider();

document.getElementById("googleLogin").addEventListener("click", async () => {
  try {
    await signInWithPopup(auth, provider);
    alert("Welcome!");
  } catch (e) {
    console.error(e);
  }
});


import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from
  "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

const ADMIN_EMAIL = "ugurbayiroglu@gmail.com";

document.getElementById("loginBtn").addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const cred = await signInWithEmailAndPassword(auth, email, password);

    if (cred.user.email !== ADMIN_EMAIL) {
      alert("You are not admin");
      return;
    }

    window.location.href = "admin.html";
  } catch (err) {
    alert("Login failed");
    console.error(err);
  }
});

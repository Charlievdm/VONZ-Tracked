// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDwF_v750MPgCtcNmL1fXMViEgs8kpW0Xo",
  authDomain: "vonz-tracked.firebaseapp.com",
  projectId: "vonz-tracked",
  storageBucket: "vonz-tracked.firebasestorage.app",
  messagingSenderId: "811010757660",
  appId: "1:811010757660:web:643f8b83b9a700f009bbd9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login Function
function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("errorMsg");

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      // Redirect after successful login
      window.location.href = "dashboard.html"; // update path as needed
    })
    .catch((error) => {
      errorMsg.textContent = error.message;
    });
}



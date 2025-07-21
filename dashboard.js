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
const db = firebase.firestore();

auth.onAuthStateChanged((user) => {
  if (user) {
    const uid = user.uid;
    document.getElementById("userId").textContent = uid;

    db.collection("Users").doc(uid).get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          document.getElementById("userName").textContent = data.name || "N/A";
          document.getElementById("userEmail").textContent = data.email || user.email;
        } else {
          document.getElementById("errorMsg").textContent = "User data not found.";
        }
      })
      .catch((error) => {
        document.getElementById("errorMsg").textContent = "Error fetching data: " + error.message;
      });
  } else {
    window.location.href = "login.html"; // Not logged in
  }
});

document.getElementById("logoutBtn").addEventListener("click", () => {
  auth.signOut().then(() => {
    window.location.href = "login.html";
  }).catch((error) => {
    document.getElementById("errorMsg").textContent = "Error signing out: " + error.message;
  });
});

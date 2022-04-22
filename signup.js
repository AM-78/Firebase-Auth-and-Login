import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
// import{

// } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js"
import { getFirestore, 
        doc, 
        setDoc, 
        getDoc, 
        addDoc, 
        updateDoc 
}from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

import{
    getAuth,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    updateProfile,
    signOut
}from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyACfZ9QZ4C1CHq5r3YhT_EVNTo3zwvdu5k",
  authDomain: "trial-4bbe0.firebaseapp.com",
  databaseURL: "https://trial-4bbe0-default-rtdb.firebaseio.com",
  projectId: "trial-4bbe0",
  storageBucket: "trial-4bbe0.appspot.com",
  messagingSenderId: "312488833893",
  appId: "1:312488833893:web:1210978ef527557d2ea78c",
  measurementId: "G-NPVHE0P4CW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

let nameBox = document.getElementById("name")
let emailBox = document.getElementById("email")
let passwordBox = document.getElementById("password")
let signupbtn = document.getElementById("signupbtn")

signupbtn.addEventListener("click", () => {
    createUserWithEmailAndPassword(auth, emailBox.value, passwordBox.value)
    .then((cred) => {
        const userCred=cred.user
        sendEmailVerification(userCred)
        updateProfile(userCred, {displayName: nameBox.value})
        signOut(auth)
        console.log(userCred)
        emailBox.value=""
        passwordBox.value=""
        alert("You Can Go Back To Login Page!")
    })
    .catch((err) => {
        alert(err.message)
    })
})

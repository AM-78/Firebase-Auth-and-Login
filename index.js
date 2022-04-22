import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
    getFirestore,
    doc,
    setDoc,
    getDoc,
    addDoc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

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
// const analytics = getAnalytics(app);
// const db = getFirestore(app);
const auth = getAuth();




//---------------------------------------------REFERENCES--------------------------------------------------

let emailBox = document.getElementById("email")
let passwordBox = document.getElementById("password")

let loginbtn = document.getElementById("loginbtn")
// let logoutbtn = document.getElementById("logoutbtn")
let logoutbtn2 = document.getElementById("logout2")

// let signupbtn = document.getElementById("signupbtn")

//----------------------------------------------------------------------------------------------------------

loginbtn.addEventListener("click", () => {
    signInWithEmailAndPassword(auth, emailBox.value, passwordBox.value)
        .then((user) => {
            console.log("Verified:", user.user.emailVerified, "\n", "Name:", user.user.displayName)
        })
        .catch((err) => {
            alert(err.message)
        })
})

// logoutbtn.addEventListener("click", () => {
//     signOut(auth)
//         .then(() => {
//             console.log("signed out")
//         })
//         .catch((err) => {
//             console.log(err.message)
//         })
// })

logoutbtn2.addEventListener("click", () => {
    signOut(auth)
        .then(() => {
            passwordBox.value=""
            console.log("signed out")
        })
        .catch((err) => {
            console.log(err.message)
        })
})


onAuthStateChanged(auth, (user) => {
    if (user) {

        document.getElementById("loginDiv").style.display = "none";
        document.getElementById("userDiv").style.display = "block";

        const uid = user.uid;
        const name = user.displayName;
        const isVerified = user.emailVerified;

        document.getElementById("mainHeading").innerHTML = ("Welcome: " + name);

        if (isVerified) {
            document.getElementById("para").innerHTML = "Your email is verified! ✔️"
        } else {
            document.getElementById("para").innerHTML = "Your Email is NOT Verified! ❌ <br><br>Please see your inbox for verification link."
        }


    } else {

        document.getElementById("loginDiv").style.display = "block";
        document.getElementById("userDiv").style.display = "none";
    }
});

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAh8QJrf8mqOTaN7dg-vE9EzX4n2Oavx04",
    authDomain: "refaang1.firebaseapp.com",
    projectId: "refaang1",
    storageBucket: "refaang1.appspot.com",
    messagingSenderId: "55034188605",
    appId: "1:55034188605:web:3fb4b2d1d971b64b072b54",
    measurementId: "G-H7NPL36SJH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const name = result.user.displayName;
            const email = result.user.email;
            const profilePic = result.user.photoURL;
            if (name && email && profilePic) {
                localStorage.setItem("name", name);
                localStorage.setItem("email", email);
                localStorage.setItem("profilePic", profilePic);
            }
        })
        .catch((error) => {
            console.log("Signin Error:", error);
        });
};

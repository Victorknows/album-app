// src/services/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYrqBj6dZtZ18A4X14LbinYtpqtbdyYfQ",
  authDomain: "assesment-f5637.firebaseapp.com",
  projectId: "assesment-f5637",
  storageBucket: "assesment-f5637.appspot.com",
  messagingSenderId: "570754277083",
  appId: "1:570754277083:web:05399fa6035c94655476fe",
  measurementId: "G-5VM9CEEBH7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Function to handle Google Sign-In
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user; // Return the authenticated user details
  } catch (error) {
    console.error("Error during sign-in:", error);
    throw error; // Re-throw the error for handling in the UI
  }
};

// Function to handle Logout
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error during logout:", error);
  }
};

// Listen to authentication state changes
export const onAuthStateChangedListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export { auth };

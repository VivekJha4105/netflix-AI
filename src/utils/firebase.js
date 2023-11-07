// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdj6wrh00B03Py04RhRqurmQJT6HfbIBg",
  authDomain: "netflix-gpt-cb8e6.firebaseapp.com",
  projectId: "netflix-gpt-cb8e6",
  storageBucket: "netflix-gpt-cb8e6.appspot.com",
  messagingSenderId: "839268616590",
  appId: "1:839268616590:web:afb8f7ddd78fffdb763cdf",
  measurementId: "G-HQDHZFHPMH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

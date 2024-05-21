// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_OyhNqBA1fp6Tq0AXXaCZxtlGNKGTvMY",
  authDomain: "zysoftec-dashboard-eff8d.firebaseapp.com",
  projectId: "zysoftec-dashboard-eff8d",
  storageBucket: "zysoftec-dashboard-eff8d.appspot.com",
  messagingSenderId: "264015378003",
  appId: "1:264015378003:web:76ed61274e6a2e014f78a6",
  measurementId: "G-66SNYMP3NP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
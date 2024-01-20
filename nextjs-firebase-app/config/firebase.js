// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.APIKEY,
  // authDomain: process.env.AUTHDOMAIN,
  // projectId: process.env.PROJECTID,
  // storageBucket: process.env.STORAGEBUCKET,
  // messagingSenderId: process.env.MESSAGINGSENDERID,
  // appId: process.env.APPID,

  apiKey: "AIzaSyCGL-71V0I-RMoIrA-HhTDQjq3ji0QoSos",
  authDomain: "fir-next-app-8e891.firebaseapp.com",
  projectId: "fir-next-app-8e891",
  storageBucket: "fir-next-app-8e891.appspot.com",
  messagingSenderId: "717742605171",
  appId: "1:717742605171:web:51dc5a96b34339b120bb06",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

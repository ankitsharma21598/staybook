import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAzb3wg4hKfJiX9OvzWFXq3qidyrC8_onY",
  authDomain: "staybook-ff71b.firebaseapp.com",
  projectId: "staybook-ff71b",
  storageBucket: "staybook-ff71b.appspot.com",
  messagingSenderId: "129055820463",
  appId: "1:129055820463:web:b174228f7f88c85dcf225a"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
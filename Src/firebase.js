import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHExHfMDRu2lVecgYxgW86TXDF-dvsWrY",
  authDomain: "personal-finance-tracker-ec56e.firebaseapp.com",
  projectId: "personal-finance-tracker-ec56e",
  storageBucket: "personal-finance-tracker-ec56e.appspot.com",
  messagingSenderId: "950549825537",
  appId: "1:950549825537:web:6a90562e6056441af49800",
  measurementId: "G-9B29EDJ2JF",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };

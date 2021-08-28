import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAjzlZTQyms5vwIxyhzkbLiMfgvuCNtUfA",
  authDomain: "fir-b8b03.firebaseapp.com",
  projectId: "fir-b8b03",
  storageBucket: "fir-b8b03.appspot.com",
  messagingSenderId: "1086067087940",
  appId: "1:1086067087940:web:dfaeda32504652b791fa11",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

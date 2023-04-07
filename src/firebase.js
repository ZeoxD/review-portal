import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA2WCbJXg3A8AW4j2ZopcP1292-pioY8M0",
    authDomain: "preview-system.firebaseapp.com",
    projectId: "preview-system",
    storageBucket: "preview-system.appspot.com",
    messagingSenderId: "706225416000",
    appId: "1:706225416000:web:ae52e45afbddffb03fbca5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };

export default db;
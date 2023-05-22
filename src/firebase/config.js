import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA2WCbJXg3A8AW4j2ZopcP1292-pioY8M0",
    authDomain: "preview-system.firebaseapp.com",
    projectId: "preview-system",
    storageBucket: "preview-system.appspot.com",
    messagingSenderId: "706225416000",
    appId: "1:706225416000:web:ae52e45afbddffb03fbca5"
};

// init firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// init firebase services
const projectFirestore = firebaseApp.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// firebase timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp };
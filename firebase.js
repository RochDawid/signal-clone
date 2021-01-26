import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUnlf7vFq0b7Gpjo7KhPIvQmmUxATyBxQ",
  authDomain: "signal-clone-ef3e0.firebaseapp.com",
  projectId: "signal-clone-ef3e0",
  storageBucket: "signal-clone-ef3e0.appspot.com",
  messagingSenderId: "257337042444",
  appId: "1:257337042444:web:c40de010147a53f54fb029",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.auth();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
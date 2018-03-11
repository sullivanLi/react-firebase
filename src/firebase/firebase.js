import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyC-iWVepLlcEe2RMMNwL_bJtKC6FgKqRr0",
  authDomain: "react-firebase-460e4.firebaseapp.com",
  databaseURL: "https://react-firebase-460e4.firebaseio.com",
  projectId: "react-firebase-460e4",
  storageBucket: "",
  messagingSenderId: "63366833400"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();

export { db };

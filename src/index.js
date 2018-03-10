import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyC-iWVepLlcEe2RMMNwL_bJtKC6FgKqRr0",
  authDomain: "react-firebase-460e4.firebaseapp.com",
  databaseURL: "https://react-firebase-460e4.firebaseio.com",
  projectId: "react-firebase-460e4",
  storageBucket: "",
  messagingSenderId: "63366833400"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

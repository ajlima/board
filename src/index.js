import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyDSZraEcYOgbI2S9ilu5a1NYbWdiHu9aO8",
    authDomain: "test-dev-d6cc6.firebaseapp.com",
    databaseURL: "https://test-dev-d6cc6.firebaseio.com",
    projectId: "test-dev-d6cc6",
    storageBucket: "test-dev-d6cc6.appspot.com",
    messagingSenderId: "1059010722579"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

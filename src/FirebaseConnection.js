import firebase from 'firebase'

let firebaseConfig = {
    apiKey: "AIzaSyA3qoILQ1HpOGs6cCFduIHT-4XsQF_FtsI",
    authDomain: "devsapp-83908.firebaseapp.com",
    databaseURL: "https://devsapp-83908.firebaseio.com",
    projectId: "devsapp-83908",
    storageBucket: "devsapp-83908.appspot.com",
    messagingSenderId: "750726768049",
    appId: "1:750726768049:web:8b2f245716d4ca40"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig); 


export default firebase;
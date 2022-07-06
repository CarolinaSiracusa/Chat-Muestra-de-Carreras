// [START initialize_firebase_in_sw]
// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
importScripts('https://www.gstatic.com/firebasejs/8.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.9.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyCNQBsujl9tYZjLtEj5bFx-utoSpWQpazg",
  authDomain: "rama1-2fc56.firebaseapp.com",
  databaseURL: 'https://rama1-2fc56.firebaseio.com',
  projectId: "rama1-2fc56",
  storageBucket: "rama1-2fc56.appspot.com",
  messagingSenderId: "462881137781",
  appId: "1:462881137781:web:f1136b333ada0282d8043c",
  measurementId: "G-P02BW2PL52"
});

const messaging = firebase.messaging();
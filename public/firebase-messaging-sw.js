// [START initialize_firebase_in_sw]
// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
importScripts('https://www.gstatic.com/firebasejs/8.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.9.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyDKrFLGsQDnd1ItrVeBioZudXGKwfRWrpo",
  authDomain: "rama2-d5fdc.firebaseapp.com",
  databaseURL: 'https://rama2-d5fdc.firebaseio.com',
  projectId: "rama2-d5fdc",
  storageBucket: "rama2-d5fdc.appspot.com",
  messagingSenderId: "628431028544",
  appId: "1:628431028544:web:4b53263655d95e2ef9baa5",
  measurementId: "G-521K55M6H6"
});

const messaging = firebase.messaging();
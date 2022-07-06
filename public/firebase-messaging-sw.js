// [START initialize_firebase_in_sw]
// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
importScripts('https://www.gstatic.com/firebasejs/8.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.9.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyC3ZkOI8IpQh5_4hm0Dpeut45VhjUVRTFE",
  authDomain: "rama3-4e77d.firebaseapp.com",
  databaseURL: 'https://rama3-4e77d.firebaseio.com',
  projectId: "rama3-4e77d",
  storageBucket: "rama3-4e77d.appspot.com",
  messagingSenderId: "653233651311",
  appId: "1:653233651311:web:fdd086b3cd7d3d9105179a",
  measurementId: "G-40KYP9EPZP"
});

const messaging = firebase.messaging();
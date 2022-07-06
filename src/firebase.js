import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/analytics';
import 'firebase/firebase-messaging'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKrFLGsQDnd1ItrVeBioZudXGKwfRWrpo",
  authDomain: "rama2-d5fdc.firebaseapp.com",
  databaseURL: 'https://rama2-d5fdc.firebaseio.com',
  projectId: "rama2-d5fdc",
  storageBucket: "rama2-d5fdc.appspot.com",
  messagingSenderId: "628431028544",
  appId: "1:628431028544:web:4b53263655d95e2ef9baa5",
  measurementId: "G-521K55M6H6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const fb = {
  auth: firebase.auth(),
  messaging: firebase.messaging(),
  firestore: firebase.firestore(),
  async login() {
      return firebase.auth().signInAnonymously()
              .then(function(result) {
                  return {success: true, data: result};
              })
              .catch(function(error){
                  return {success: false, error: error.message};
              });
  },

}
export default fb
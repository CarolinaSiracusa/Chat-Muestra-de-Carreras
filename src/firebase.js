import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/analytics';
import 'firebase/firebase-messaging'

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyCNQBsujl9tYZjLtEj5bFx-utoSpWQpazg",
  authDomain: "rama1-2fc56.firebaseapp.com",
  databaseURL: 'https://rama1-2fc56.firebaseio.com',
  projectId: "rama1-2fc56",
  storageBucket: "rama1-2fc56.appspot.com",
  messagingSenderId: "462881137781",
  appId: "1:462881137781:web:f1136b333ada0282d8043c",
  measurementId: "G-P02BW2PL52"
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
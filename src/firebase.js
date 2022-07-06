import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/analytics';
import 'firebase/firebase-messaging'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3ZkOI8IpQh5_4hm0Dpeut45VhjUVRTFE",
  authDomain: "rama3-4e77d.firebaseapp.com",
  databaseURL: 'https://rama3-4e77d.firebaseio.com',
  projectId: "rama3-4e77d",
  storageBucket: "rama3-4e77d.appspot.com",
  messagingSenderId: "653233651311",
  appId: "1:653233651311:web:fdd086b3cd7d3d9105179a",
  measurementId: "G-40KYP9EPZP"
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
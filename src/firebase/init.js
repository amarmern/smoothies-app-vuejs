import firebase from 'firebase';
import firestore from 'firebase/firestore';
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDpfXURKnbJVBkPM_Mt3kMSmRS-wGuxI2U",
    authDomain: "smoothies-app-9b0cc.firebaseapp.com",
    databaseURL: "https://smoothies-app-9b0cc.firebaseio.com",
    projectId: "smoothies-app-9b0cc",
    storageBucket: "smoothies-app-9b0cc.appspot.com",
    messagingSenderId: "185042370534",
    appId: "1:185042370534:web:7bb5f1bfb28d7be61de027",
    measurementId: "G-84YMY1F7QY"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
 // firebase.analytics();

  // export firebase database
   export default firebaseApp.firestore();

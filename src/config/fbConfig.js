  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCNTKMb2HmuD6OBbbRd53T-HOiSA0H8jMg",
    authDomain: "website-redux.firebaseapp.com",
    databaseURL: "https://website-redux.firebaseio.com",
    projectId: "website-redux",
    storageBucket: "website-redux.appspot.com",
    messagingSenderId: "383361077797",
    appId: "1:383361077797:web:74c22195c4574d9bbea5cc",
    measurementId: "G-4HC112SXKY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;
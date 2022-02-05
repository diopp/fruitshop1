import firebase from 'firebase/compat/app'; //v9

import 'firebase/compat/auth';
import 'firebase/compat/firestore'; //v9

const firebaseConfig = {
    apiKey: "AIzaSyActWPOJHSVv66C0b6u1_VMfd9E4yhGiJs",
    authDomain: "projects3-842f6.firebaseapp.com",
    projectId: "projects3-842f6",
    storageBucket: "projects3-842f6.appspot.com",
    messagingSenderId: "614466287120",
    appId: "1:614466287120:web:da80553cd5c2143c9d3c95",
    measurementId: "G-250KY1MQSR"
  };
  
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  function login() {
      return auth.signInWithPopup(provider);

  }

  function logout() {
      return auth.signOut();

  }

  export  {auth, login, logout};
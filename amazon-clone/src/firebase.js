
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDYT2iVIVZp-CxCxPdNeRHHepVsoTka-b0",
    authDomain: "fir-e0f1a.firebaseapp.com",
    projectId: "fir-e0f1a",
    storageBucket: "fir-e0f1a.appspot.com",
    messagingSenderId: "85738848519",
    appId: "1:85738848519:web:a825ad98931bd1fb8805a2",
    measurementId: "G-DX89GMHTY8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };
  export default firebase
  

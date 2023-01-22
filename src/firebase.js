import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBhvPqQl34XDo5OSzGHnqSLiydRtZbHzq4",
    authDomain: "my-netflix-clone-2c284.firebaseapp.com",
    projectId: "my-netflix-clone-2c284",
    storageBucket: "my-netflix-clone-2c284.appspot.com",
    messagingSenderId: "741263465720",
    appId: "1:741263465720:web:18e1fc6c7a8326ba8a6f0d"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};

export default db;

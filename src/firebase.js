import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC1hGD5lJ2R0yBp4e5DERviTBkbZcxEFg8",
    authDomain: "huppmessenger.firebaseapp.com",
    databaseURL: "https://huppmessenger.firebaseio.com",
    projectId: "huppmessenger",
    storageBucket: "huppmessenger.appspot.com",
    messagingSenderId: "250472886973",
    appId: "1:250472886973:web:f5c3d8067e3860a04a3dd4"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
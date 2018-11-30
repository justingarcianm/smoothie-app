import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCsjm1U88wHwh2lwGserQikdd4KjJmzAyI",
    authDomain: "ninja-smoothies-4d332.firebaseapp.com",
    databaseURL: "https://ninja-smoothies-4d332.firebaseio.com",
    projectId: "ninja-smoothies-4d332",
    storageBucket: "ninja-smoothies-4d332.appspot.com",
    messagingSenderId: "602935326398"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

// export firestore database
export default firebaseApp.firestore()
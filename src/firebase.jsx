import firebase from 'firebase';
const messengerAPP = firebase.initializeApp({
    apiKey: "AIzaSyAviaKZ2vfKvyfv9RuRpNsFcVSdM9Rsieo",
    authDomain: "zoo-website-f652e.firebaseapp.com",
    databaseURL: "https://zoo-website-f652e.firebaseio.com",
    projectId: "zoo-website-f652e",
    storageBucket: "zoo-website-f652e.appspot.com",
    messagingSenderId: "1005893540224",
    appId: "1:1005893540224:web:c351a0a47426e2498e4965",
    measurementId: "G-YCLEJQ1JYQ"
})

const db = messengerAPP.firestore();
export default db;
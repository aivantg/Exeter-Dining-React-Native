const firebase = require("firebase");
require("firebase/firestore");

//Initializing firebase firestore
firebase.initializeApp({
    apiKey: "AIzaSyBxwatEUwIu9RmEBT52Jt2GyqRU98Y1KjQ",
    authDomain: "exeter-dining-halls.firebaseapp.com",
    databaseURL: "https://exeter-dining-halls.firebaseio.com",
    projectId: "exeter-dining-halls",
    storageBucket: "exeter-dining-halls.appspot.com",
    messagingSenderId: "155953516475"
});

const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
}
firestore.settings(settings);



export default firebase;

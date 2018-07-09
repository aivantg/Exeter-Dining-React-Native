const firebase = require("firebase");
require("firebase/firestore");

//Initializing firebase firestore
firebase.initializeApp("< YOUR FIREBASE INITIALIZATION INFO HERE >");

const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
}
firestore.settings(settings);



export default firebase;

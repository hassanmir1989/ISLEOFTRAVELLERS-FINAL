var firebase = require("firebase/app");

require("firebase/database");
require("firebase/storage");
require("firebase/auth");

// Initialize Firebase
// var config = {
//   apiKey: "AIzaSyB_p7AUk4nkpRTLlSsyAfCxcPBSMLZVs5g",
//   authDomain: "isleoftravellers.firebaseapp.com",
//   databaseURL: "https://isleoftravellers.firebaseio.com",
//   projectId: "isleoftravellers",
//   storageBucket: "isleoftravellers.appspot.com",
//   messagingSenderId: "837587182121"
// };
// firebase.initializeApp(config);

const database = firebase.database();
export const storage = firebase.storage();
export const auth = firebase.auth();
export default database;

var firebase = require("firebase/app");

require("firebase/database");
require("firebase/storage");

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
var storage = firebase.storage();
export { database as default, storage };
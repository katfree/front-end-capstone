
import firebase from 'firebase';
import 'firebase/storage'
// Initialize Firebase. var config is needed to use firebase cloud service
var config = {
    apiKey: "AIzaSyDN5SlOFJcnofkUxnvmuCvjWUGlF_C8zwU",
    authDomain: "breakawaytickets522.firebaseapp.com",
    databaseURL: "https://breakawaytickets522.firebaseio.com",
    projectId: "breakawaytickets522",
    storageBucket: "breakawaytickets522.appspot.com",
    messagingSenderId: "9934426586",
    appId: "1:9934426586:web:49802228417dcb54"
};
firebase.initializeApp(config);

//set method firebase.storage to variable to use else where.
const storage = firebase.storage()

export {
    storage, firebase as default
}
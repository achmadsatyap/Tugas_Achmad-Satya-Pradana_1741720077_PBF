import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA7OYXs6MbxUY29i2yDD2ZE2mghfdzPwJ8",
    authDomain: "uaspbf-b737e.firebaseapp.com",
    databaseURL: "https://uaspbf-b737e.firebaseio.com",
    projectId: "uaspbf-b737e",
    storageBucket: "uaspbf-b737e.appspot.com",
    messagingSenderId: "97617952003",
    appId: "1:97617952003:web:562ab086b5fed31e113d36",
    measurementId: "G-Q445N7GKW7"
};

class Firebase{
    constructor(){
        firebase.initializeApp(firebaseConfig);

        this.auth = firebase.auth();
        this.db = firebase.firestore();
    }
}

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
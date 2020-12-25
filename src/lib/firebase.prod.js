import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import {seedDatabase} from "../seed";

const config = {
    apiKey: "AIzaSyDlWffFlyIWFv7vOOBzX2yY7lTb-MDidtQ",
    authDomain: "netflix-5f288.firebaseapp.com",
    projectId: "netflix-5f288",
    storageBucket: "netflix-5f288.appspot.com",
    messagingSenderId: "766495805396",
    appId: "1:766495805396:web:956ff1187fe16be9139041"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase); // comment this after running one that

export {firebase};
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDbdTGrhuAGSqUS8jA5POJmQd6S4e7qMlU",
    authDomain: "ecommerce-app-24dc4.firebaseapp.com",
    databaseURL: "https://ecommerce-app-24dc4.firebaseio.com",
    projectId: "ecommerce-app-24dc4",
    storageBucket: "ecommerce-app-24dc4.appspot.com",
    messagingSenderId: "466591112848",
    appId: "1:466591112848:web:eff8e8a03ac6ab56824215"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
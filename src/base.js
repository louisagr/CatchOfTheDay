import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCMku6bvCLg6CjPQXdWO_qX8UfyU3UiPv4",
        authDomain: "catch-of-the-day-louisagr.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-louisagr.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());
// This is a named export
export { firebaseApp };

export default base;
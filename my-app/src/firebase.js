import firebase from 'firebase'
// Your web app's Firebase configuration
var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDHNPyJuUaB7u0rTtRjAAQt1DAU1u-SZnw",
    authDomain: "sand-contact-form.firebaseapp.com",
    projectId: "sand-contact-form",
    storageBucket: "sand-contact-form.appspot.com",
    messagingSenderId: "426691781510",
    appId: "1:426691781510:web:304025137393d12ba4c207"
});

var db = firebaseApp.firestore();

export { db }
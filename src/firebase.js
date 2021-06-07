import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyBIsgqG44Urc8t6ZPEB2bF918L6Lkwq0eg",
    authDomain: "twitchbuds-dev.firebaseapp.com",
    databaseURL: "https://twitchbuds-dev-default-rtdb.firebaseio.com",
    projectId: "twitchbuds-dev",
    storageBucket: "twitchbuds-dev.appspot.com",
    messagingSenderId: "754220880083",
    appId: "1:754220880083:web:1051827e7b41cac2048426"
})

const firestore = app.firestore()

export const database = {
    promotion: firestore.collection('promotions'),
    contactForms: firestore.collection('contactForms'),
    users: firestore.collection('users')
}

export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const auth2 = firebase.auth()
export const auth = app.auth()
export default app

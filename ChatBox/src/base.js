import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAWbftREcFCTyjJ_K0sSlNnLU2fZcj8EDM",
    authDomain: "chatbox-app-4f4f2.firebaseapp.com",
    databaseURL: "https://chatbox-app-4f4f2.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())


export { firebaseApp }

export default base 
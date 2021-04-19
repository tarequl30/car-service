import firebase from "firebase/app"
import "firebase/auth"
const app = firebase.initializeApp( {
    apiKey: "AIzaSyDcEMi6-7cXwJFL1fvifa-FaB4trNmRu2Y",
    authDomain: "car-service-3a75c.firebaseapp.com",
    projectId: "car-service-3a75c",
    storageBucket: "car-service-3a75c.appspot.com",
    messagingSenderId: "959905300248",
    appId: "1:959905300248:web:943c60e22822cd9ba9686d"
  });

  export const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider()
  export const auth = app.auth()
  export default app
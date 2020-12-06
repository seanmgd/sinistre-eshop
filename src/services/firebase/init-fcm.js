import firebase from 'firebase/app'

export const initializedFirebaseApp = () => {
  const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: 'sinistre-666.firebaseapp.com',
    projectId: 'sinistre-666',
    storageBucket: 'sinistre-666.appspot.com',
    messagingSenderId: '288173480100',
    appId: '1:288173480100:web:eb7076a8d06f96aa4dae31',
    measurementId: 'G-ZYM9SJEFLQ',
  }
  firebase.initializeApp(config)
}

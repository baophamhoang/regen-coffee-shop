import {initializeApp} from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyAT_zzo9Qx6cs-WmSqe-iwLaR1_V7Yn5gA",
    authDomain: "the-restaurant-184d9.firebaseapp.com",
    databaseURL: "https://the-restaurant-184d9-default-rtdb.firebaseio.com",
    projectId: "the-restaurant-184d9",
    storageBucket: "the-restaurant-184d9.appspot.com",
    messagingSenderId: "171570155953",
    appId: "1:171570155953:web:ae5a774e1e2c02243fed90",
    measurementId: "G-KS4PJXS3ZP"
  };
    
export const app = initializeApp(firebaseConfig);

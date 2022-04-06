import {initializeApp} from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyDV2teOWZzwG5uovN8CPJtZbN7KFssHYYE",
    authDomain: "bao-restaurant.firebaseapp.com",
    databaseURL: "https://bao-restaurant-default-rtdb.firebaseio.com",
    projectId: "bao-restaurant",
    storageBucket: "bao-restaurant.appspot.com",
    messagingSenderId: "963691663434",
    appId: "1:963691663434:web:3ee769eeaaeb105b9696b3",
    measurementId: "G-WT00MT3905"
};
    
export const app = initializeApp(firebaseConfig);

import { initializeApp } from 'firebase/app'
import "firebase/compat/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBGkJg9EM175OelaKP3-1ZdUAIX9v9BwmQ",
    authDomain: "sub-atomic-d904f.firebaseapp.com",
    projectId: "sub-atomic-d904f",
    storageBucket: "sub-atomic-d904f.appspot.com",
    messagingSenderId: "141179298674",
    appId: "1:141179298674:web:3f6c96d3429e34e2a973eb",
    measurementId: "G-BC216WSCV7"
};

const storage = firebase.storage()

const firebase = initializeApp(firebaseConfig);

export default {storage, firebase}
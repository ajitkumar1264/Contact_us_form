import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyA2WRzab9laYxdPFQHlxqliWCqj09q78-o",
    authDomain: "learn-firebase-9-52031.firebaseapp.com",
    projectId: "learn-firebase-9-52031",
    storageBucket: "learn-firebase-9-52031.appspot.com",
    messagingSenderId: "1093445127147",
    appId: "1:1093445127147:web:8df73ebab76f3a5f6467ae"
  };


  const app = initializeApp(firebaseConfig);
 export const auth=getAuth(app);
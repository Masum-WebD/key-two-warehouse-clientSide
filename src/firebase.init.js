// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYRdDSE7WzDsgLvGBAhOv-xK7-RgrDVfg",
  authDomain: "zero-point-telecom.firebaseapp.com",
  projectId: "zero-point-telecom",
  storageBucket: "zero-point-telecom.appspot.com",
  messagingSenderId: "376028276847",
  appId: "1:376028276847:web:b1b7e47b136076a2c4059a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth
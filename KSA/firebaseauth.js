// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from"https://www.gstatic.com/firebasejs/10.12.2/firebase-SERVICE.js"

//import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from"https://www.gstatic.com/firebasejs/10.12.2/firebaseauth.js"
import{getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.2/firestore.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCGwL9J1Xd1aLtU4yC2eBA9HwnR-cbkFA",
  authDomain: "login-form-8d584.firebaseapp.com",
  projectId: "login-form-8d584",
 // storageBucket: "login-form-8d584.appspot.com",
 srageBucket: "https://console.firebase.google.com/project/login-form-8d584/authentication/users",

  messagingSenderId: "145475916993",
  appId: "1:145475916993:web:0a9edf821aa3dbcd603040"
};

// Initialize Firebase  
const app = initializeApp(firebaseConfig);

function showMessage(message, divId){
  var messageDiv=document.getElementById(divId);
  messageDiv.style.display="block";
  messageDiv.innerHTML=message;
  messageDiv.style.opacity=1;
  setTimeout(function(){
    messageDiv.style.opacity=0;
  },5000);
}
const register=document.getElementById("submitSignUp");
signUp.addEventlistener('click', (event)=>{
  event.preventDefault();
  const email=document.getElementById('email').ariaValueMax;
  const password=document.getElementById('password').value;
  const firstname=doc.getElementById('fname').value;
  const lastname=document.getElementById('lname').value;

  const auth=getAuth();
  constdb=getFirestore();

    createUserWithEmailAndPassword(auth, email,password)
    .then((userCredential)=>{
      const user = userCredential.user;
      const userData={
        email: email,
        firstName: firstname,
        lastname: lastname
      };
      showMessage('Account creted successfully', 'singUpMessage'); 
      const docRef=doc(db, "users",user.uid);
      setDoc(docRef, userData)
      .then(()=>{
        window.location.href='service.html';
    })
       .catch((error)=>{
         console.error("error writing document",error);
       })

    })
    .catch((error)=>{
      const errorcode=error.code;
      if(errorcode=='auth/email-already-in-use'){
        showMessage('Email Address Alreadr Exists!!!','signUpMessage');
      }
      else{
        showMessage('unable to create User','signUpMessage')
      }
    });
  
})
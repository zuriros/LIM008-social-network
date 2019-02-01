

import signUp from '../ui/signUp.js';
import signIn from '../ui/signIn.js';
import {signUpFirebase} from '../lib/authFirebase.js';

signUp();




// Obtener elementos
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnSignUp = document.getElementById('btnSignUp');
const aSignIn = document.getElementById('a-signIn');
const aSignUp = document.getElementById('a-signUp');

btnSignUp.addEventListener('click', e => {
    signUpFirebase(txtEmail,txtPassword);
   
  });

  aSignIn.addEventListener('click', e => {
    signIn();
  });

  aSignUp.addEventListener('click', e => {
    signUp();
  });
export const myFunction = () => {
  // aqui tu codigo



}

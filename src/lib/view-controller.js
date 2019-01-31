

import signUp from '../ui/signUp.js';
import {signUpFirebase} from '../lib/authFirebase.js';

signUp();




// Obtener elementos
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnSignUp = document.getElementById('btnSignUp');

btnSignUp.addEventListener('click', e => {
    signUpFirebase(txtEmail,txtPassword);
   
  });


export const myFunction = () => {
  // aqui tu codigo



}

import signUp from '../ui/signUp.js';
import signIn from '../ui/signIn.js';
import {signUpFirebase, loginFacebook, loginGoogle} from '../lib/authFirebase.js';


signUp();


// Obtener elementos
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const formSignUp = document.getElementById('formulario');
const aSignIn = document.getElementById('a-signIn');
const aSignUp = document.getElementById('a-signUp');
const btnFacebook = document.getElementById("btn-facebook");
const btnGoogle = document.getElementById('btn-google');


btnGoogle.addEventListener('click',() => {
  loginGoogle();
})
btnFacebook.addEventListener('click',() => {
  loginFacebook();
});

formSignUp.addEventListener('submit', e => {
  e.preventDefault(); 
  signUpFirebase(txtEmail,txtPassword);
   
  });

  // aSignIn.addEventListener('click', e => {
  //   signIn();
  // });

  // aSignUp.addEventListener('click', e => {
  //   signUp();
  // });
export const myFunction = () => {
  // aqui tu codigo



}

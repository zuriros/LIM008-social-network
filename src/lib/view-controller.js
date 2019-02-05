import { signIn, signUp, loginFacebook, loginGoogle } from "./controller-firebase.js";

const changeHash = (hash) => {
  location.hash = hash;
}
export const signUpOnSubmit = () => {
  const email = document.querySelector('#up-email').value;
  const password = document.querySelector('#up-password').value;
  signUp(email, password)
  .then(result =>{
    const urlMyPage = {
       url: window.location.href+'#/signIn'
    }
    result.user.sendEmailVerification(urlMyPage).catch(function(error) {
        alert('No se pudo enviar email')
 });
    firebase.auth().signOut()
 }).catch(function(error) {
    alert(error.message)
  });
}
export const signFacebook = () => {
  loginFacebook()
    .then(() => changeHash('/wall'))
    .catch(() => { })
}
export const signGoogle = () => {
  loginGoogle()
    .then(() => changeHash('/wall'))
    .catch(() => { })
}
export const signInOnSubmit = () => {
  const email = document.querySelector('#in-email').value;
  const password = document.querySelector('#in-password').value;
  signIn(email, password)
    .then(() => changeHash('/wall'))
    .catch(() => { })
}
export const showIn = () => {
  changeHash('/signIn');
}
export const showUp = () => {
  changeHash('/signUp');
}
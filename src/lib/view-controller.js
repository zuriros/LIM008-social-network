import { signIn, signUp, loginFacebook, loginGoogle, addPost, deletePost, editPost, countLike} from './controller-firebase.js';

const changeHash = (hash) => {
  location.hash = hash;
};
export const signUpOnSubmit = () => {
  const email = document.querySelector('#up-email').value;
  const password = document.querySelector('#up-password').value;
  signUp(email, password)
    .then(result => {
      const urlMyPage = {
        url: window.location.href + '#/signIn'
      };
      result.user.sendEmailVerification(urlMyPage).catch(function(error) {
        alert('No se pudo enviar email');
      });
      firebase.auth().signOut();
    }).catch(function(error) {
      alert(error.message);
    });
};
export const signFacebook = () => {
  loginFacebook()
    .then(() => changeHash('/wall'))
    .catch(() => { });
};
export const signGoogle = () => {
  loginGoogle()
    .then(() => changeHash('/wall'))
    .catch(() => { });
};
export const signInOnSubmit = () => {
  const email = document.querySelector('#in-email').value;
  const password = document.querySelector('#in-password').value;
  signIn(email, password)
    .then(() => changeHash('/wall'))
    .catch(() => { });
};
export const showIn = () => {
  changeHash('/signIn');
};
export const showUp = () => {
  changeHash('/signUp');
};
const authUserUid = () => {
  return firebase.auth().currentUser;
};
export const addPostOnSubmit = (event) => {
  event.preventDefault();
  const input = document.getElementById('input-new-post');
  const select = document.getElementById('select-type-share');
  const userUid = authUserUid();
  const data = {
    message: '',
    timeout: 2000,
    actionText: 'Undo'
  };
  addPost(input.value, select.value, userUid)
 
    .then(() => {
      input.value = '';
      data.message = 'Nota agregada',
      alert('');
    }).catch(() => {
      input.value = '';
      data.message = 'Lo sentimos, no se pudo agregar la nota';
      alert('');
    });
};

export const deletePostOnClick = (objPost) => {
  deletePost(objPost.id);
};

export const editPostOnClick = (objPost) => {
  const txtEditPost = document.getElementById(`txt-edit-post-${objPost.id}`);
  const selEditTypeShare = document.getElementById(`select-type-share-${objPost.id}`);
  
  editPost(objPost, txtEditPost.value, selEditTypeShare.value);
};

export const countLikeOnClick = (objtPost) => {
  countLike(objtPost);
};


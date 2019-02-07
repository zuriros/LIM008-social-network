export const signIn = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

export const signUp = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);

export const loginFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const addPost = (textNewNote, privacidad) => {
  return firebase.firestore().collection('posts').add({
    userId: firebase.auth().currentUser.uid,
    descripcion: textNewNote,
    likeCounter: 0,
    typeShare: privacidad,
    date: new Date()
  });
};
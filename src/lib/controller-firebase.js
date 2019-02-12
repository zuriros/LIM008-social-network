
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

export const addPost = (textNewNote, privacidad, userUid) => {
  console.log('entre');
  
  return firebase.firestore().collection('posts').add({
    descripcion: textNewNote,
    likeCounter: 0,
    userId: userUid,
    typeShare: privacidad,
    date: new Date()
  });
};
export const getPost = (callback) => {
  firebase.firestore().collection('posts').orderBy('date', 'desc')
    .onSnapshot((querySnapshot) => {
      const arrPosts = [];
      querySnapshot.forEach((doc) => {
        arrPosts.push({ id: doc.id, ...doc.data() });
      });
      callback(arrPosts);
    });
};

export const countLike = (objtPost) => {
  const counter = parseInt(objtPost.likeCounter) + 1;
  firebase.firestore().collection('posts').doc(objtPost.id).update({
    'likeCounter': counter
  });
};

export const deletePost = (id) => {
  firebase.firestore().collection('posts').doc(id).delete();
};

export const editPost = (objtPost, txtEditPost, valShare) => {
  firebase.firestore().collection('posts').doc(objtPost.id).update({
    'descripcion': txtEditPost,
    'typeShare': valShare 
  });
};
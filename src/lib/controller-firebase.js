export const signIn = (email, password) =>
    firebase.auth().signInWithEmailAndPassword(email, password)

export const signUp = (email, password) =>
    firebase.auth().createUserWithEmailAndPassword(email, password);

export const loginFacebook = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider)
};

export const loginGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
};

export const addNote = (textNewNote) =>
  firebase.firestore().collection('notes').add({
    title: textNewNote,
    state: false
  })

export const deleteNote = (idNote) =>
  firebase.firestore().collection('notes').doc(idNote).delete()

export const getNotes = (callback) =>
  firebase.firestore().collection('notes')
    .onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() })
      });
      callback(data);
    }); 
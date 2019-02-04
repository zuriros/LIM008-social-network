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
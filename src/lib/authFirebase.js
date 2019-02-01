


export const signUpFirebase = (txtEmail,txtPassword) => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    // Sign in
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.code));
console.log(email)



}


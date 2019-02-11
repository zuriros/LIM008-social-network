import { signUpOnSubmit, signGoogle, signFacebook, showIn } from "../lib/view-controller.js";

export default () => {
  const form = document.createElement('form');
  const formContent = `
  
<div class="container">
<div class="minimal-body">

    <div class="heading">
      <img src="img/ecohack-logo.png">
      <p>Llena al mundo de conocimiento.</p>
    </div>

    <div class="login-form">
      
      <button type="button" id ="btn-google" class="google"><i class="fa fa-google fa-fw"></i>Iniciar sesión con  Google</button>
      <button type="button" id ="btn-facebook" class="facebook"><i class="fa fa-facebook fa-fw"></i>Iniciar sesión con  Facebook</button>
      <div class="Row horizontalRow">
          <div class="horizontalText">o</div>
          <div class="horizontalLine"></div>
      </div>
      <input type="text" placeholder="Nombre" name="name" required>
      <input type="email" placeholder="Correo electrónico" name="email" id="up-email"required>
      <input type="password" placeholder="Contraseña" name="psw" id="up-password" required>
      <input id="txtPasswordConf" type="password" placeholder="Confirma tu contraseña" name="psw-repeat" required>
      <label>
        
  
      <div class="clearfix">
      <button type="button" id ="btnSignUp" class="btn-sign">Registrarse</button>
      <p>Al registrate, aceptas nuestras 
      Condiciones, la Política de datos y 
      la Política de cookies.</p>
      </div>
      
    </div> 

    <div class="contenxt-switch">
     <p class="izU2O">¿Tienes una cuenta?   <a id="a-signIn">Inicia sesión</a></p>
    </div>
</div>
</div>
  `;
  form.innerHTML = formContent;

  // selecccionando elementos del DOM

  const btnGoogle = form.querySelector('#btn-google');
  btnGoogle.addEventListener('click', signGoogle);

  const btnFacebook = form.querySelector('#btn-facebook');
  btnFacebook.addEventListener('click', signFacebook);

  const btnSignUp = form.querySelector('#btnSignUp');
  btnSignUp.addEventListener('click', signUpOnSubmit);

  const enlace = form.querySelector('#a-signIn');
  enlace.addEventListener('click', showIn);



  return form;
}





// export default () => {
//   const htmlContent = `
// <form  id="formulario" style="border:1px solid #ccc">
//   <div class="container">
//   <div class="gr27e">
//     <h1>Eco Hack</h1>
//     <p>Please fill in this form to create an account.</p>

//     <button type="button" id ="btn-google">Iniciar sesión con  Google</button>
//     <button type="button" id ="btn-facebook">Iniciar sesión con  Facebook</button>
//     <hr> 
//     <input type="text" placeholder="Nombre" name="name" required>
//     <input id="txtEmail" type="email" placeholder="Correo electrónico" name="email" required>
//     <input id="txtPassword" type="password" placeholder="Contraseña" name="psw" required>
//     <input id="txtPasswordConf" type="password" placeholder="Confirma tu contraseña" name="psw-repeat" required>
//     <label>
//       <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Recuerdame
//     </label>
//     <p>Al registrate, aceptas nuestras Condiciones, la Política de datos
//     <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>
//     <div class="clearfix">
//     <button type="submit" id ="btnSignUp" class="btn btn-secondary">Registrarse</button>
//     </div>
// </form>


//  `;


//   const sectionMain = document.getElementById('container');
//   sectionMain.innerHTML = ''
//   sectionMain.innerHTML = htmlContent

// };

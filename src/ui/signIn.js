import { signInOnSubmit, showUp } from '../lib/view-controller.js';
export default () => {
  const form = document.createElement('form');
  const formContent = `
  <form>
    <div class="container">
    <div class="gr27e">
      <h1>Eco Hack</h1>
      <input id="in-email" type="email" placeholder="Correo electrónico" name="email" required>
      <input id="in-password" type="password" placeholder="Contraseña" name="psw" required>
      <button type="button" id = "btnSignUp" class="btn-sign">Iniciar sesión</button>
      </div>
    </div>
    <div class="gr27e">
      <p class="izU2O">¿No tienes una cuenta? <a id="a-signUp">Regístrate</a></p>
    </div>
  </form>
  `;
  form.innerHTML = formContent;
  const btnSignIn = form.querySelector('#btnSignUp');
  btnSignIn.addEventListener('click', signInOnSubmit);
  const enlace2 = form.querySelector('#a-signUp');
  enlace2.addEventListener('click', showUp);
  return form;
};

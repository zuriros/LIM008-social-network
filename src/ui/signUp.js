export default () => {
  const htmlContent = `
<form action="action_page.php" style="border:1px solid #ccc">
  <div class="container">
  <div class="gr27e">
    <h1>Eco Hack</h1>
    <p>Please fill in this form to create an account.</p>

    <button type="button" id="btn-google" >Iniciar sesión con  Google</button>
    <button type="submit" >Iniciar sesión con  Facebook</button>
    <hr>
    <input type="text" placeholder="Nombre" name="name" required>
    <input id="txtEmail" type="email" placeholder="Correo electrónico" name="email" required>
    <input id="txtPassword" type="password" placeholder="Contraseña" name="psw" required>
    <input id="txtPasswordConf" type="password" placeholder="Confirma tu contraseña" name="psw-repeat" required>
    <label>
      <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Recuerdame
    </label>
    <p>Al registrate, aceptas nuestras Condiciones, la Política de datos
    <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>
    <div class="clearfix">
    <button type="submit" id = "btnSignUp" class="btn btn-secondary">Registrarse</button>
    </div>
  </div>
    
  <div class="gr27e">
    <p class="izU2O">¿Tienes una cuenta? <a id="a-signIn">Inicia sesión</a></p>
  </div>
</form>


 `;


  const sectionMain = document.getElementById('container');
  sectionMain.innerHTML = ''
  sectionMain.innerHTML = htmlContent

};

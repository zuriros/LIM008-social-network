
export default () => {
    const htmlContent = `
    <form class="modal-content" action="/action_page.php">
    <div class="container">
      <h1>Eco Hack</h1>
      <p>Please fill in this form to create an account.</p>
      <hr>
      <button type="submit" >Iniciar sesión con  Google</button>
      <button type="submit" >Iniciar sesión con  Facebook</button>
      <input type="text" placeholder="Nombre" name="name" required>
      <input id="txtEmail" type="email" placeholder="Correo electrónico" name="email" required>
      <input id="txtPassword" type="password" placeholder="Contraseña" name="psw" required>
      <input id="txtPasswordConf" type="password" placeholder="Confirma tu contraseña" name="psw-repeat" required>

      <label>
        <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Recuerdame
      </label>

      <p>Al registrate, aceptas nuestras Condiciones, la Política de datos <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>
      <div class="clearfix">
      <button id = "btnSignUp" class="btn btn-secondary">Registrarse</button>
      </div>
    </div>
  </form>



    <input  placeholder="Email">
    <input  placeholder="Contraseña">
    <button id = "btnLogin" class="btn btn-action">Login</button> 
    <button id = "btnSignUp" class="btn btn-secondary">Registrarse</button>
    <button id = "btnLogout" class="btn btn-action hide">Logout</button>
  `;
   
  
    const sectionMain = document.getElementById('container');
    sectionMain.innerHTML = ''
    sectionMain.innerHTML = htmlContent
  

  };
  
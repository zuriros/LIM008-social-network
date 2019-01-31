export default () => {
    const htmlContent = `
  
  
  <form action="action_page.php" style="border:1px solid #ccc">
    <div class="container">
    <div class="gr27e">
      <h1>Eco Hack</h1>
      <input id="txtEmail" type="email" placeholder="Correo electrónico" name="email" required>
      <input id="txtPassword" type="password" placeholder="Contraseña" name="psw" required>
      <button type="button" id = "btnSignUp" class="btn btn-secondary">Iniciar sesión</button>
      </div>
    </div>
      
    <div class="gr27e">
      <p class="izU2O">¿No tienes una cuenta? <a href="/accounts/login/?source=auth_switcher">Regístrate</a></p>
    </div>
  </form>
  
  
   `;
  
  
    const sectionMain = document.getElementById('container');
    sectionMain.innerHTML = ''
    sectionMain.innerHTML = htmlContent
  
  
  };
  
import { addPostOnSubmit, deletePostOnClick, countLikeOnClick, editPostOnClick } from '../lib/view-controller.js';

const divPost = (objPost) => {
  const divElement = document.createElement('div');
  divElement.innerHTML = `
   <div id="arrpost"> 
    <div>    
      <img id ='user-img' src="https://st2.depositphotos.com/3400509/7601/v/950/depositphotos_76011101-stock-illustration-kitty-head-icon.jpg" height="42" width="42">
      <span id='user-name'>name<span>
      <span>${objPost.date}<span>
    </div>
    <div>
      <textarea  id='user-post' rows="4" cols="50">
       ${objPost.descripcion}
      </textarea>
    </div>
    <div>    
      <button id='btn-like-${objPost.id}'>Like</button>
      <span id='count-like'>${objPost.likeCounter}<span>
      <button id='btn-edit-${objPost.id}'>Editar</button>
      <button id='btn-delete-${objPost.id}'>Eliminar</button>
    </div>  
    
    <!-- Modal edit div -->
    <div id="myModal-${objPost.id}" class="modal">
    
    <!-- Modal content -->
        <div class="modal-content">
            <span id="close-${objPost.id}" class="close">&times;</span>
    
            <textarea id="txt-edit-post-${objPost.id}">
                ${objPost.descripcion}
            </textarea>
            
            <select id="select-type-share-${objPost.id}">
                <option>Publico</option>
                <option>Privado</option>
            </select>
            
            <button  id="btn-edit-post-${objPost.id}">Guardar
            </button>
          
        </div>
    </div>

   </div>    
  `;
  divElement.querySelector(`#btn-delete-${objPost.id}`)
    .addEventListener('click', () => deletePostOnClick(objPost));
  divElement.querySelector(`#btn-like-${objPost.id}`)
    .addEventListener('click', () => countLikeOnClick(objPost));
  divElement.querySelector(`#btn-edit-post-${objPost.id}`)
    .addEventListener('click', () => editPostOnClick(objPost));
  divElement.querySelector(`#btn-edit-${objPost.id}`)
    .addEventListener('click', () => (document.getElementById(`myModal-${objPost.id}`).style.display = 'block'));
  divElement.querySelector(`#close-${objPost.id}`)
    .addEventListener('click', () => (document.getElementById(`myModal-${objPost.id}`).style.display = 'none'));
  return divElement;
};

export default (arrPosts) => {
  const divContainer = document.createElement('div');
  const homeContent = `
    <!-- form add post -->
    <form>
      <div>
       <input id="input-new-post" placeholder="Ingresa tu post">
       <select id="select-type-share">
        <option>Publico</option>
        <option>Privado</option>
       </select>
       
       <button  id="btn-add-post">Publicar </button>
      
       </div>
    </form>
    <!-- posts -->
    <section id="container-posts">
     
    </section>
  `;
  divContainer.innerHTML = homeContent;
  const buttonAddPost = divContainer.querySelector('#btn-add-post');
  const containerPosts = divContainer.querySelector('#container-posts');
  arrPosts.forEach(objPost => {
    containerPosts.appendChild(divPost(objPost));
  });
  buttonAddPost.addEventListener('click', addPostOnSubmit);
  return divContainer;
};
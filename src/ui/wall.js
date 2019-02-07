import { addPostOnSubmit } from '../lib/view-controller.js';

const divPost = () => {
  const divElement = document.createElement('div');
  liElement.innerHTML = `
   <div> 
    <div>    
      <img src="C:\Users\laboratoria\Downloads\cat_icon.jpg" height="42" width="42">
      <span>Catina<span>
    </div>
    <div>
      <textarea rows="4" cols="50">
        At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies. 
      </textarea>
    </div>
    <div>    
      <button>Like</button>
      <span>2<span>
      <button>Editar</button>
      <button>Eliminar</button>
    </div>   
   </div>    
  `;
  return divElement;
}

export default (arrPosts) => {
  const divContainer = document.createElement('div');
  const homeContent = `
    <!-- form add post -->
    <form >
      <div >
       <input  id="input-new-post" placeholder="Ingresa tu post">
       
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
  //const containerPosts = divContainer.querySelector('#container-posts');
  //containerPosts.appendChild(divPost());
  console.log(arrPosts);
  // arrPosts.forEach(objPost => {
  //   containerPosts.appendChild(divPost());
  // });
  buttonAddPost.addEventListener('click', addPostOnSubmit);
  return divContainer;
};
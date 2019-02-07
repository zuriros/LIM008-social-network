import signUp from './ui/signUp.js';
import signIn from './ui/signIn.js';
import wall from './ui/wall.js';
// import {getNotes} from './lib/controller-firebase.js';

const changeTmp = (hash) => {
  console.log("changeTmp"+hash);
  if (hash === '#/' || hash === '' || hash === '#') {
    return viewTmp('#/signUp');
  } else if (hash === '#/signIn' || hash === '#/signUp'|| hash === '#/wall') {
    return viewTmp(hash);
  } else {
    return viewTmp('#/signUp');
  }
}

const viewTmp = (routers) => {
  const router = routers.substr(2, routers.length - 2)
  const root = document.getElementById('container');
  root.innerHTML = '';
  console.log(routers)
  switch (router) {
  case 'wall':
    // getNotes((notes) => {
    //   root.innerHTML = '';        
    //   root.appendChild(wall(notes));  
    // })
    
    //getPosts()
    root.appendChild(wall());
    break; 
  case 'signUp':
    root.appendChild(signUp());
    break;
  case 'signIn':
    root.appendChild(signIn());
    break;
  default:
    root.appendChild(signUp());
    break;
  }
};

export const initRouter = () => {
  window.addEventListener('load', changeTmp(window.location.hash))
  if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash);
};
// importamos la funcion que vamos a testear
// import mocksFirebase from '../_mocks_/firebase-mocks.js';
// global.firebase = mocksFirebase(); 
import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    post: {
      __doc__: {
        idMyUserA: {
          title: 'Nuestra social-network'
        },
        idMyUserB: {
          title: 'Usuario de nuestra red'
        },
      }
    }
  }
};

global.firebase = new MockFirebase(fixtureData, {isNaiveSnapshotListenerEnabled: true});
import { addPost } from '../src/lib/controller-firebase.js';

describe('addPost', () => {
  it('debería poder agregar un post', (done) => {
    return addPost('agregando post', 'Publico', 'Nombre desconocido').then((dataPost) => {
      expect(dataPost).toBe('agregando post', 'Publico', 'Nombre desconocido');
      const callFunction = (post) => {
        console.log(post);
        done();
      };
      getPost(callFunction);
    });
  });
});

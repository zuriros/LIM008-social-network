
export default () => {
    const divContainer = document.createElement('div');
    const homeContent = `
     <p> hola baby </p>
    `;
    divContainer.innerHTML = homeContent;
    return divContainer;
  }
const indexContentCreator = (() => {
  const createHeader = () => {
    const header = document.createElement('h1');
    header.classList.add('center');
    header.textContent = 'All Projects(inside this machine)';
    return header;
  };


  const createIndexContent = () => {
    const content = document.createElement('div');
    content.appendChild(createHeader());
    return content
  };

  return { createIndexContent };

})()

export default function createIndexContent(){
  return indexContentCreator.createIndexContent();
}
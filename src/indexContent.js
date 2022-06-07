import createProject from './creationToolCreator';

const indexContentCreator = (() => {
  const createHeader = () => {
    const header = document.createElement('h1');
    header.classList.add('center');
    header.textContent = 'All Projects(inside this machine)';
    return header;
  };

  const projectsArea = () => {
    const area = document.createElement('div');
    area.classList.add('projects-area');

    return area
  }

  const createIndexContent = () => {
    const content = document.createElement('div'); 
    content.appendChild(createHeader());
    content.appendChild(createProject());
    content.appendChild(projectsArea());
    return content
  };

  return { createIndexContent };

})()

export default function createIndexContent(){
  return indexContentCreator.createIndexContent();
}
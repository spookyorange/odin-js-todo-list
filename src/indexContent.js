import createProject from './creationToolCreator';
import { makeProjectDiv } from './createContent';

const indexContentCreator = (() => {
  const createHeader = () => {
    const header = document.createElement('h1');
    header.classList.add('center');
    header.textContent = 'All Projects(inside this machine)';
    return header;
  };

  const projectsArea = () => {
    const area = document.createElement('div');
    if (localStorage.getItem('projects')) {
      const projects = JSON.parse(localStorage.getItem('projects'));
      projects.forEach(project => {
        area.appendChild(makeProjectDiv(project))
      });
    }
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
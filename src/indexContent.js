import { createProject, todoCreator } from './creationToolCreator';
import { makeProjectDiv, makeTodoDiv } from './createContent';

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
      let i = 0
      projects.forEach(project => {
        area.appendChild(makeProjectDiv(project, i))
        area.appendChild(todoCreator(i))
        if (projects[i].toDos.length > 0) {
          let f = 0
          while (projects[i].toDos.length > f) {
            let haha = document.createElement('div')
            haha = makeTodoDiv(projects[i].toDos[f], i, f)
            area.appendChild(haha)
            f += 1
          }
        }
        i += 1
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
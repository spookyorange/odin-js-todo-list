import './style.css'
import { projectFactory, makeProjectDiv } from './createContent';

const creationToolCreator = (() => {

  const projectCreator = () => {
    const projectCreator = document.createElement('div');

    const projectNameLabel = document.createElement('label');
    const projectNameInput = document.createElement('input');
    const createProjectButton = document.createElement('button');

    createProjectButton.textContent = 'Create Project';

    projectCreator.classList.add('project-creator');


    projectNameInput.name = 'newProject';
    projectNameLabel.id = 'newProject';
    projectNameLabel.textContent = 'New Project';

    createProjectButton.addEventListener('click', (e) => {
      e.preventDefault();
      if (projectNameInput.value == '') {
        return;
      }
      const projectName = projectNameInput.value;
      projectNameInput.value = '';
      const project = projectFactory(projectName);
      const projectsArea = document.querySelector('.projects-area')
      projectsArea.appendChild(makeProjectDiv(project))
    })

    projectCreator.appendChild(projectNameLabel);
    projectCreator.appendChild(projectNameInput);
    projectCreator.appendChild(createProjectButton);

    return projectCreator
    
    
  }
  
  
  const createTodo = () => {
    // todo: create new todos for a project
    // CREATION OBJECT
  }

  return { projectCreator }
})()

export default function createProject() {
  return creationToolCreator.projectCreator()
}
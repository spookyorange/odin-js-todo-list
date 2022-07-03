import './style.css'
import { projectFactory, makeProjectDiv, todoFactory, makeTodoDiv } from './createContent';
import { createIndex } from './layoutCreator';

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
      projectFactory(projectName);
      resetIndexLayout();
    })

    projectCreator.appendChild(projectNameLabel);
    projectCreator.appendChild(projectNameInput);
    projectCreator.appendChild(createProjectButton);

    return projectCreator
    
    
  }
  
  const resetIndexLayout = () => {
    let currentLayout = document.querySelector('.current-layout')
    let i = 0
    while (i < currentLayout.children.length) {
        currentLayout.children[i].remove();
        i+=1;
    }
    currentLayout.appendChild(createIndex())
  }


  const todoCreator = (projectIndex) => {
    let newTodoCreator = document.createElement('div');
    newTodoCreator.classList.add('todo-creator')

    let form = document.createElement('form');
    let aboutLabel = document.createElement('label');
    let aboutInput = document.createElement('input');
    aboutLabel.textContent = 'To-Do'
    let dueDateLabel = document.createElement('label');
    let dueDateInput = document.createElement('input');
    dueDateLabel.textContent = 'Due Date'
    let importanceLabel = document.createElement('label');
    let importanceInput = document.createElement('input');
    importanceLabel.textContent = 'Importance'
    let createTodoButton = document.createElement('button');
    createTodoButton.textContent = "Create Todo";

    form.appendChild(aboutLabel);
    form.appendChild(aboutInput);
    form.appendChild(dueDateLabel);
    form.appendChild(dueDateInput);
    form.appendChild(importanceLabel);
    form.appendChild(importanceInput);
    form.appendChild(createTodoButton);

    createTodoButton.addEventListener('click', (e) => {
      e.preventDefault();
      
      let projects = JSON.parse(localStorage.getItem('projects'))

      projects[projectIndex].toDos.push(todoFactory(aboutInput.value, dueDateInput.value, importanceInput.value))
      
      if (aboutInput.value != '' && dueDateInput != '' && importanceInput != ''){
        localStorage.setItem('projects', JSON.stringify(projects))
      
        resetIndexLayout(); 
      }
    })

    newTodoCreator.appendChild(form)
    return newTodoCreator
  }

  return { projectCreator, todoCreator, resetIndexLayout }
})()

export function createProject() {
  return creationToolCreator.projectCreator()
}

export function todoCreator(projectIndex) {
  return creationToolCreator.todoCreator(projectIndex)
}

export function resetIndexLayout() {
  return creationToolCreator.resetIndexLayout()
}
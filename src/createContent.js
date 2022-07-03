import { resetIndexLayout } from "./creationToolCreator";

const contentCreator = (() => {

  const createProject = (projectName) => {
    const newProject = makeProject(projectName);
    if (localStorage.getItem('projects')) {
      const projects = JSON.parse(localStorage.getItem('projects'))
      projects.push(newProject)
      localStorage.setItem('projects', JSON.stringify(projects))
    }
    else {
      const projects = []
      projects.push(newProject)
      localStorage.setItem('projects', JSON.stringify(projects))
    }

    return newProject
  }

  const makeProject = (projectName) => {
    return {
      projectHeader: `${projectName}`,
      toDos: []
    }
  }


  const createTodo = (about, dueDate, importance) => {
    const newTodo = makeTodo(about, dueDate, importance);
    return newTodo
  }
  
  const makeTodo = (about, dueDate, importance) => {
    return {
      about: `${about}`,
      dueDate: `${dueDate}`,
      importance: `${importance}` 
    }
  }




  const makeProjectDiv = (project, i) => {
    const theDiv = document.createElement('div');
    theDiv.classList.add('project-div');
    theDiv.dataset.index = i
    const theHeader = document.createElement('h3');
    theHeader.classList.add('project-header');
    theHeader.textContent = `${project.projectHeader}` 
    theDiv.appendChild(theHeader) 

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Done/Delete"

    deleteButton.addEventListener('click', (e) => {
      e.preventDefault();

      const projects = JSON.parse(localStorage.getItem('projects'))
      projects.splice(i, 1)
      localStorage.setItem('projects', JSON.stringify(projects))
      resetIndexLayout()
    })
    theDiv.appendChild(deleteButton)


    return theDiv
    
  }

  const makeTodoDiv = (toDo, i, f) => {
    const theDiv = document.createElement('div');
    theDiv.classList.add('todo-div');
    theDiv.dataset.todoIndex = `${f}`;
    theDiv.dataset.todoProjectIndex = `${i}`;
    const about = document.createElement('p');
    about.textContent = toDo.about
    const date = document.createElement('p');
    date.textContent = toDo.dueDate
    const importance = document.createElement('p');
    importance.textContent = toDo.importance
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Done/Delete"

    deleteButton.addEventListener('click', (e) => {
      e.preventDefault();

      const projects = JSON.parse(localStorage.getItem('projects'))
      projects[i].toDos.splice(f, 1)
      localStorage.setItem('projects', JSON.stringify(projects))
      resetIndexLayout()
    })

    theDiv.appendChild(about)
    theDiv.appendChild(date)
    theDiv.appendChild(importance)
    theDiv.appendChild(deleteButton)
    return theDiv
  }



  return { createProject, makeProjectDiv, createTodo, makeTodoDiv }
})()

export function projectFactory(projectName) {
  return contentCreator.createProject(projectName)
}

export function makeProjectDiv(project, i) {
  return contentCreator.makeProjectDiv(project, i)
}

export function todoFactory(about, dueDate, importance) {
  return contentCreator.createTodo(about, dueDate, importance)
}

export function makeTodoDiv(toDo, i, f) {
  return contentCreator.makeTodoDiv(toDo, i, f)
}
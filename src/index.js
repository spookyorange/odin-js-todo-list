import './style.css'
import createLayout from './layoutCreator'

const contentCreator = (() => {
    const body = document.querySelector('body');

    



    const createProjects = () => {
        // todo: create a new project
        // CREATION OBJECT
    }

    const createTodos = () => {
        // todo: create new todos for a project
        // CREATION OBJECT
    }

    const createConstructionTools = () => {
        // todo: create 2 things => creating project & creating todos
        // CREATION OBJECT
    }

    const retrieveProjects = () => {
        // todo: retrieve all projects in localstorage IF there is at least one
        // RETREIVE OBJECT
    }

    const retrieveTodos = () => {
        // todo: retrieve all todos of a project in localstorage IF there is at least one
        // RETREIVE OBJECT
    }

    const createContent = () => {
        
        body.appendChild(createLayout())
    }

    return { createContent }
})();

contentCreator.createContent()
import './style.css'
import createLayout from './layoutCreation'

const contentCreator = (() => {
    const content = document.querySelector('#content');

    const createHeader = () => {
        const header = document.createElement('h1');
        header.textContent = 'All Projects(inside this machine)';
        header.classList.add('center');
        return header
    }

    const createNavbar = () => {
        // todo: a bar for navigation across website => index & contact & about
    }

    const createProjects = () => {
        // todo: create a new project
    }

    const createTodos = () => {
        // todo: create new todos for a project
    }

    const createConstructionTools = () => {
        // todo: create 2 things => creating project & creating todos
    }

    const retrieveProjects = () => {
        // todo: retrieve all projects in localstorage IF there is at least one
    }

    const retrieveTodos = () => {
        // todo: retrieve all todos of a project in localstorage IF there is at least one
    }

    const createContent = () => {
        const header = createHeader();
        content.appendChild(header);
    }

    return { createContent }
})();

contentCreator.createContent()
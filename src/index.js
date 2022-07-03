import './style.css';
import { createLayout } from './layoutCreator';

const contentCreator = (() => {
    const body = document.querySelector('body');

    



    

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
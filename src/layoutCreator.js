import createIndexContent from './indexContent';
import createContactContent from './contactContent';
import createAboutContent from './aboutContent';


const layoutController = (() => {
    const content = document.querySelector('#content');
    const currentLayout = document.createElement('div');
    currentLayout.classList.add('current-layout');

    const killContent = () => {
        let i = 0
        while (i < currentLayout.children.length) {
            currentLayout.children[i].remove();
            i+=1;
        };
    }

    const generateIndexContent = () => {
        return createIndexContent();
    }

    const generateAboutContent = () => {
        return createAboutContent();
    }

    const generateContactContent = () => {
        return createContactContent();
    }

    const navbarListItemCreator = (item, content) => {
        const listItem = document.createElement('li');
        listItem.dataset.name = item;
        listItem.textContent = content;
        addLinkToListItem(item, listItem);

        return listItem
    }

    const addLinkToListItem = (linkRef, itemItself) => {
        if (linkRef === 'index') {
            itemItself.addEventListener('click', () => {
                killContent();
                currentLayout.appendChild(generateIndexContent());
            }
        )
        } else if (linkRef === 'about') {
            itemItself.addEventListener('click', () => {
                killContent();
                currentLayout.appendChild(generateAboutContent());
            }
        )
        } else if (linkRef === 'contact') {
            itemItself.addEventListener('click', () => {
                killContent();
                currentLayout.appendChild(generateContactContent());
            }
        )
        }
    }


    const createNavbar = () => {
        const navbar = document.createElement('navbar');
        const navbarList = document.createElement('ul');

        navbarList.classList.add('navbarList');


        navbarList.appendChild(navbarListItemCreator('index', 'To-Dos'));
        navbarList.appendChild(navbarListItemCreator('contact', 'Contact'));
        navbarList.appendChild(navbarListItemCreator('about', 'About'));

        navbar.appendChild(navbarList);
        return navbar
    }

    
    
    const createLayout = () => {
        currentLayout.appendChild(createIndexContent());
        content.appendChild(createNavbar());
        content.appendChild(currentLayout);
        return content
    }

    return { createLayout, generateIndexContent }
})()

export function createLayout(){
    return layoutController.createLayout();
}

export function createIndex(){
    return layoutController.generateIndexContent();
}
const contentCreator = (() => {

  const createProject = (projectName) => {
    return {
      projectHeader: `${projectName}`
    }
  }

  const makeProjectDiv = (project) => {
    const theDiv = document.createElement('div');
    theDiv.classList.add('project-div');
    const theHeader = document.createElement('h3');
    theHeader.classList.add('project-header');
    theHeader.textContent = `${project.projectHeader}`
    console.log(project.projectHeader)
    theDiv.appendChild(theHeader)

    return theDiv
    
  }



  return { createProject, makeProjectDiv }
})()

export function projectFactory(projectName) {
  return contentCreator.createProject(projectName)
}

export function makeProjectDiv(project) {
  return contentCreator.makeProjectDiv(project)
}
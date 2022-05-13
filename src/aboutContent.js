const aboutContentCreator = (() => {
  const createHeader = () => {
    const header = document.createElement('h1');
    header.classList.add('center');
    header.textContent = 'About';
    return header;
  };

  const createAboutParagraph = () => {
    const aboutParagraph = document.createElement('p');
    aboutParagraph.classList.add('center');
    aboutParagraph.textContent = 'I made this litte web app to practice my webpack and modular js skills. I hope you enjoy it!';
    return aboutParagraph;
  };


  const createAboutContent = () => {
    const content = document.createElement('div');
    content.classList.add('aboutContent');
    content.appendChild(createHeader());
    content.appendChild(createAboutParagraph());
    return content
  };

  return { createAboutContent };

})()

export default function createAboutContent(){
  return aboutContentCreator.createAboutContent();
}
const contactContentCreator = (() => {
  const createHeader = () => {
    const header = document.createElement('h1');
    header.classList.add('center');
    header.textContent = 'Contact';
    return header;
  };

  const createTelNo = () => {
    const telNo = document.createElement('h2');
    telNo.classList.add('center');
    telNo.textContent = 'Tel: 020-12345678';
    return telNo;
  };

  const createEmail = () => {
    const email = document.createElement('h2');
    email.classList.add('center');
    email.textContent = 'Email: random@random.com';
    return email;
  };


  const createContactContent = () => {
    const content = document.createElement('div');
    content.classList.add('contactContent');
    content.appendChild(createHeader());
    content.appendChild(createTelNo());
    content.appendChild(createEmail());
    return content
  };

  return { createContactContent };

})()

export default function createContactContent(){
  return contactContentCreator.createContactContent();
}
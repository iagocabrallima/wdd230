

const lastModifiedElement = document.getElementById('lastModified');
const yearElement = document.getElementById('year');


const lastModified = new Date(document.lastModified).toLocaleString();


const currentYear = new Date().getFullYear();


lastModifiedElement.textContent = `Last modified: ${lastModified}`;
yearElement.textContent = currentYear;



const flagIconElement = document.getElementById('flagIcon');


flagIconElement.innerHTML = 'BR'; 


flagIconElement.style.fontSize = '24px';
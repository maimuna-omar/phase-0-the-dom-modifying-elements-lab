// Write your code here!
// Select the 'main' element by its ID and remove it from the DOM
const main = document.querySelector('#main');
main.remove();

// Create a new 'h1' element with the text "YOUR-NAME is the champion"
const newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
newHeader.textContent = "YOUR-NAME is the champion";

// Append the new 'h1' element to the document's 'body' element
document.body.appendChild(newHeader);
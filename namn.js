const input = document.querySelector('#input-field');
const button = document.querySelector('button');
const messageBox = document.querySelector('#message-box');

button.addEventListener('click', () => {
    const name = input.value;
    const ul = document.createElement('ul');
    for(let i = 0; i < name.length; i++) {
        const li = document.createElement('li');
        console.log(name[i])
        li.textContent = name[name.length-i-1];;
        ul.appendChild(li);
        messageBox.appendChild(ul);
    }
    
});
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is a glorious text-content!';

const p = document.createElement('p');
p.classList.add('p');
p.textContent = 'Hey I\'m red!';
p.style.color = 'red';

const h3 = document.createElement('h3');
h3.classList.add('h3');
h3.textContent = 'I\’m a blue h3!';
h3.style.color = 'blue';

container.appendChild(content);
container.appendChild(p);
container.appendChild(h3);

const container2 = document.createElement('div');
container2.style.cssText = 'background-color: pink; border: 1px solid;';

const h1_2 = document.createElement('h1');
h1_2.classList.add('h1_2');
h1_2.textContent = 'I\'m in a div';

const p_2 = document.createElement('p');
p_2.classList.add('p_2');
p_2.textContent = 'ME TOO!';

container.appendChild(container2);
container2.appendChild(h1_2);
container2.appendChild(p_2);

const btn = document.querySelector('#btn');

function alertFunction() {
    alert("YAY! YOU DID IT!");
}

btn.addEventListener('click', alertFunction);

btn.addEventListener('click', e => 
    e.target.style.backgroundColor ='blue'
);

//to add event listeners to items matching a specific selector in the nodeList
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});


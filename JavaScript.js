const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
    const choice = select.value;

    if (choice === 'sunny') {
        para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
    } else if (choice === 'rainy') {
        para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
    } else if (choice === 'snowing') {
        para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
    } else if (choice === 'overcast') {
        para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
    } else {
        para.textContent = '';
    }
}

//Conditional (Ternary) Operators
//Ternary meaning three, so it accepts three operands (boolean ? if true : else false)
//let me test it out

// function ternary(isMember) {
//     return (isMember ? '$2.00' : '$10.00');
// } 

// console.log(ternary(true));

//Both similar
// function example() {
//     return condition1 ? value1
//           : condition2 ? value2
//           : condition3 ? value3
//           : value4;
//   }

//   function example() {
//     if (condition1) {
//       return value1;
//     } else if (condition2) {
//       return value2;
//     } else if (condition3) {
//       return value3;
//     } else {
//       return value4;
//     }
//   }

function draw() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    for (let i = 0; i < 100; i++) {
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255,0,0,0.5)';
        ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
        ctx.fill();
    }
}

//if you do it with a seperate function
function logKey(event) {
    console.log(`You pressed "${event.key}".`);
}

textBox.addEventListener('keydown', logKey);

// if you do it with an anonymous function
textBox.addEventListener('keydown', function (event) {
    console.log(`You pressed "${event.key}".`)
});

// if you do it with an arrow function (anonymous but used arrow form)
textBox.addEventListener('keydown', (event) => { console.log(`You pressed "${event.key}".`); });

// arrow function with one line of code can omit the curly brackets
textBox.addEventListener('keydown', (event) => console.log(`You pressed "${event.key}".`));

// arrow function with one paramater can omit the brackets for the parameter
textBox.addEventListener('keydown', event => console.log(`You pressed "${event.key}".`));

// if function only contains a single line of code, can also omit the return statement
const originals = [1, 2, 3];

const doubled = originals.map((item) => item * 2);

// similar to:
// function doubleItem(item) {
//     return item * 2;
//   }

console.log(doubled); // [2, 4, 6]

//live example
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener('keydown', (event) => output.textContent = `You pressed "${event.key}".`);
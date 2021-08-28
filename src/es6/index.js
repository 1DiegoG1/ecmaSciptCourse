// Initize params
function newFunction (name, age, country) {
        var name = name || 'oscar';
        var age = age || 32;
        var country = country || 'MX';
        console.log(name, age, country);
}

// es6
function newFunction2(name = 'oscar', age = 32, country = 'MX') {
        console.log(name, age, country);
};
newFunction2();
newFunction2('Diego', 16, 'VNZ');

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2)

// TEXT
let lorem = "qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem \n"
+ "XD";

let lorem2 = `Otra frase epica
xd
`
console.log(lorem);
console.log(lorem2);

// DISPLAY VALUES
let person = {
        'name': 'Diego',
        'age': 16,
        'country': 'MX',
};

console.log(person.name, person.age, person.country);
let { name, age, country } = person;
console.log(name, age, country);

let team1 = ['Diego', 'Francisco', 'Félix'];
let team2 = ['Valeria', 'Yesica', 'Camila'];
let education = [...team1, ...team2];
console.log(education);

// LET AND CONST
{
        var globalVar = 'Global Var';
}
{
        let globalLet = 'Global Let';
        console.log(globalLet);
}
console.log()

const a = 'b';
a = 'a';
console.log(a);

// Objects

let name = 'Diego';
let age = '16';

obj = { name: name, age: age};

obj2 = { name, age};
console.log(obj2);

// Arrow Functions
const names = [
        {name: 'Diego', age: 16},
        {name: 'Félix', age: 25},
];
let listOfNames = names.map(function (item)  {
        console.log(item.name);
});

let listOfNames = names.map(item => console.log(item.name));

let listOfNames3 = (name, age, country) => {
        ...
}

const listOfNames4 = name => {
        ...
}

const square = num => num * num;

// Promise

const helloPromise = () => {
        return new Promise((resolve, reject) => {
                if (true) {
                        resolve('Hey!');
                } else {
                        reject('Ups!');
                }
        });
}
helloPromise()
 .then(respose => console.log(respose))
 .then(() => console.log('hola'))
 .catch(error => console.log(error));

 // Classes
class calculator {
        constructor(){
                this.valueA = 0;
                this.valueB = 0;
        }
        sum(valueA, valueB) {
                this.valueA = valueA;
                this.valueB = valueB
                return this.valueA + this.valueB;
        }
}

const calc = new calculator();
console.log(calc.sum(2,2));

import { hello } from './module';

hello(); 

// Generator
function* helloWorld() {
        if(true) {
                yield 'Hello, ';
        }
        if (true) {
                yield 'World';
        }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
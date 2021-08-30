const obj = {
        name: 'Diego',
        age: 16,
        country: 'VNZ',
};

let {name, ...all } = obj;
console.log(name, all);

const obj = {
        name: 'Diego',
        age: 16,
};

const obj1 = {
        ...obj,
        country: 'VNZ',
};
consol.log(obj1);


const helloWorld = () => {
        return new Promise((resolve, reject) => {
                (true)
                ? setTimeout(() => resolve('Hello World'), 3000)
                : reject(new Error('TEst Error'))
        });
};
helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Finalizó'));

const regexData = /([0-9]{4})-([0-9]{2})-([0-9] {2})/

const match = regexData.exec('2018-04-20');
const year = match[1]
const mount = match[2]
const day = match[3]
console.log(year, mount, day);

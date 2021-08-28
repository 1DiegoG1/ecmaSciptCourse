// Entries
const data = {
        frontend: 'Mariangela',
        backend: 'Diego, Félix',
        design: 'Elo',
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

// Values
const data = {
        frontend: 'Mariangela',
        backend: 'Diego, Félix',
        design: 'Elo',
}

const values = Object.values(data);
console.log(values);
console.log(values.length);

// String padStart and padEnd
const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' -----'));
console.log('food'.padEnd(12, ' -----'));

const obj = {
        name: 'Diego',
}

// Async Await
const helloWorld = () => {
        return new Promise ((resolve, reject) => {
                if (true) {
                        setTimeout(() => resolve('Hello'), 3000)
                } else {
                        reject(new Error('Test Error'))
                }
        })
};

const helloAsync = async () => {
        const hello = await helloWorld();
        console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
        try {
                const hello = await helloWorld();
                console.log(hello);
        } catch (error) {
                console.log(error);
        }
};

anotherFunction();

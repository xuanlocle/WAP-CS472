// Define a TypeScript function that takes an object with the following
// properties: name (string), age (number), and isStudent (boolean). The function should return a
// string describing the person.

function myFunction(person: { name: string, age: number, isStudent: boolean }): string {
    return `This person name is ${person.name}, age is ${person.age}, and is ${person.isStudent ? "" : "not "}a student`;
}

console.log(myFunction({ name: 'loc', age: 28, isStudent: true }));
// This person name is loc, age is 28, and is a student

console.log(myFunction({ name: 'le', age: 27, isStudent: false }));
// This person name is le, age is 27, and is not a student

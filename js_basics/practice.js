// function profile(name){
//     console.log("welcome user");
// }
// profile('champ');

// Define the function
// function greet(name) {
//     console.log('Hello, ' + name + '!');
// }

// // Call the function
// greet('Alice');  // Output: Hello, Alice!
// function square(num) {
//     return num * num;
// }

// console.log(square(4));  // Output: 16
// console.log(square(7));  // Output: 49

// const fruits = ['apple', 'banana', 'cherry'];
// fruits.forEach(fruit => console.log(fruit));

// fruits.forEach(function(fruit) {
//     console.log(fruit);
// });
//Practice: Filter out all numbers greater than 10 from an array of numbers.//

// const numbers = [5, 12, 8, 130, 44];
// const filtered = numbers.filter(num => num > 10);
// console.log(filtered); // [12, 130, 44]

// map to create a new array where each number is doubled.//
// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(num => num * 2);
// console.log(doubled); // [2, 4, 6, 8]

// reduce to find the sum of all numbers in an array.//
// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((accumulator, num) => accumulator + num, 0);
// console.log(sum); // 10

// const nestedArrays = [[1, 2], [3, 4], [5, 6]];
// const flattened = nestedArrays.reduce((acc, curr) => acc.concat(curr), []);
// console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]

//for in loop
// const colors = ['red', 'green', 'blue'];

// // for (let index in colors) {
// //     console.log(index + ': ' + colors[index]);
// // }
// for (let position in colors) {
//     console.log(position + ': ' + colors[position]);
// }

const colors = ['red', 'green', 'blue'];

for (const color of colors) {
    console.log(color);
}

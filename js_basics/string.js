const name = "aira";
const count = 50;

// console.log(name + count);
console.log(`my name is ${name}  and countno is  ${count}`);

const gamename = new String('champion');
console.log(gamename[3]);
console.log(gamename.__proto__);
console.log(gamename);

console.log(gamename.charAt(3));
console.log(gamename.toUpperCase());
console.log(gamename.toLowerCase());
console.log(gamename.slice(2 , 4));

const variablename = "   championchamp"  ; 
console.log(variablename); //same execute
console.log(variablename.trim()); // in trim remove spaces 

console.log(variablename.replace('champ' , 'star'));//for replace in start 

console.log(variablename.includes("championchamp"));// if it is available or not if yes then true output otherwise false



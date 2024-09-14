//for loop
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
// for (let i = 0; i <= 10; i++) {
//     const element = i;
    // console.log(element);  


// }
// for (let x = 10; x >= 0; x++) {
//     const element = i;
    // console.log(element);  }

for (let x = 0; x <= 10 ; x++) {
    const element = x;
    if(element == 8){
        // console.log("8 is the best number")
    }
    // console.log(element);
}

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

// for (let y = 0; y <= 10 ; y++) {
//     const element = y ;
//    console.log(`outer loop ${y}`)
//     for (let z = 0; z <= 10 ; z++) {
//         const element = z;
//     //   console.log(`Inner loop value ${z} and inner loop ${y}`);
//       console.log(y + '*' + z + ' = ' + y*z );
//     }
    
// }
for (let y = 0; y <= 10; y++) {
    // console.log(`Outer loop ${y}`);
    
    for (let z = 0; z <= 10; z++) {
        // console.log(y + ' * ' + z + ' = ' + y * z);
    }
}

// for (let y = 0; y <= 30; y++) {
//     console.log(`Outer loop ${y}`);
    
//     for (let z = 0; z <= 30; z++) {
//         // Corrected the variable names to use y and z
//         console.log(y + ' * ' + z + ' = ' + y * z);
//     }
// }
let myarray = ["book1" , "book2" , "book3"];
// console.log(myarray.length);
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element);    
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log(`Detected 5`);
        continue
    }
//    console.log(`Value of i is ${index}`);
    
}

//+++++++++++ while   //do while loop
// let index = 0 ;
// while (index <= 10) {
//     // console.log(`value of index is ${index}`)
//     index = index +2
// }

let myArray = [`english` , " urdu" , "math" , "computer"]

let myarr = 0 ;

while (myarr < myArray.length) {
    // console.log(`value is ${myArray[myarr]}`)
    // console.log(myArray);
    // console.log(myArray[myarr]);
   
    myarr = myarr +1 ;
}  
//+++++++++++ Do while loop
let score = 1
do {
    console.log(`the value of score is ${score}`);
    // score = score + 1
    score++
} while (score <=10 );
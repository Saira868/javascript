// function functionname(execute brackets parameters){
//     defination
// }
// functionname( call called argument)

function functionname(){
    console.log("w")
    console.log("E")
    console.log("L")
    console.log("C")
    console.log("O")
    console.log("M")
    console.log("E")
}
// functionname()

function addtwonumbers(num1 , num2){
    console.log(num1 + num2 );
}
// addtwonumbers(2233 , 5566)

function addtwonumbers(num1 , num2){
//   let result = num1 +num2 
//   return result (1st method)
return num1 + num2 ;
}

const result = addtwonumbers(2  , 2 )
// console.log("result :"  , result);

function loginusermsg(username){
    if(username === undefined){
        console.log("enter username")
        return
    }
    return ` ${username} just logged in`
}
// console.log(loginusermsg("aira"));

// ++++++++++function in array
const mynewarray = [200 , 400 , 900 , 700 , 800 , 500]
function return3rdvalue(getarray){
    return getarray[3]
}
// console.log(return3rdvalue(mynewarray));
// console.log(return3rdvalue([200 , 400 , 900, 700 , 800 , 500]));

//++++++++++++ function in objects
// const myobj = {
//     name : "book" ,
//     price :450 ,
// }
// function mynewobjfunction(myobj){
// // return myobj.name;
// return myobj;
// }
// console.log(mynewobjfunction(myobj));
// console.log(mynewobjfunction( { name : "book" ,
//     price :450 ,
// }));

const user = {
    username : "abc" ,
    price : 300 
}

function handleobject(anyobj){
    // console.log(`username is ${anyobj.username} and price is ${anyobj.price}`)
}
// handleobject(user)
// handleobject({
//     username : "name" ,
//     price : 400
// });
//++++++++++using this keyword
const newUser = {
    username : "aira" ,
    price   : 300 ,
    welcomemsg : function(){
     console.log (`${this.username} , welcome to website`)
    //  console.log(this)
    }
}
// newUser.welcomemsg()
// newUser.username = "haya"
// newUser.welcomemsg()

// console.log(this)

//++++++arrow function

// const notebook = function(){
//   let  username = "book" 
// //   console.log(this .username)
// }
// console.log(notebook)

const notebook = () => {
    let username = "arial"
    // console.log(this . username)
    // console.log(this)
}
// notebook()

const addtwo = (num1 , num2) => {
    return num1 + num2
}
// console.log(addtwo(2 ,6));

///2nd method of arrow function
// const addthree = (num1 , num2 , num3) => num1 + num2 + num3
const addthree = (num1 , num2 , num3) => (num1 + num2 + num3)

// console.log(addthree(2 , 4 ,8));

///++++++++++++IIFE (immediatly invoked function Expression)
//   (function one() {
//     console.log(`DB Connected`);
//    })();

 (function one() {
    console.log(`DB Connected`);
  })();
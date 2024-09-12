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

// function in array
const mynewarray = [200 , 400 , 900 , 700 , 800 , 500]
function return3rdvalue(getarray){
    return getarray[3]
}
// console.log(return3rdvalue(mynewarray));
// console.log(return3rdvalue([200 , 400 , 900, 700 , 800 , 500]));

// function in objects
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
    console.log(`username is ${anyobj.username} and price is ${anyobj.price}`)
}
// handleobject(user)
handleobject({
    username : "name" ,
    price : 400
});
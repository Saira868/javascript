// singleton 
//objects.create ...constructor method

//objects literals 
const symbol  = Symbol("key1")
const jsuser = {
    name       : "haya",
    [symbol]     :   "mykey1" ,
    age        : 20,
    location   : "Pak",
    email      : "haya@gmail.com",
    islogin    : false,  // should be a boolean, not a string
    lastlogindays  : ["monday", "tuesday", "wednesday"]
}; 
// console.log(jsuser);
// console.log(jsuser[symbol]);

jsuser.name = "abcd" // for change
// object.freeze(jsuser)
// Object.freeze(jsuser);
// jsuser.name = "areeba";
// console.log(jsuser);

//singleton objects 
// const singleton = new object {}

const singleton = {}
singleton.id = "123"  
singleton.name = "haya"
singleton.isloggedin = false

// console.log(singleton);
const tinder = {
    name : "raya",   // Add a comma here
    fullname : {
        company : "xyz", 
        tel     : "02848"
    }
};

// console.log(tinder.fullname);

const cource = {
    courcename : "javascript" ,
    price       : 600 ,
    teacher     : "youtube"
}
console.log(cource);

//cource.courceinstructor

// const {courceinstructor} = cource 
const {courceinstructor : instructor}  = cource // destructore

// console.log(courceinstructor)
// console.log(instructor);

// {
//     //JSON
//     "name" : "name" ,
//     "cource" : "cource" ,
//     "price" : "price"
// }


//for of loop
const arr = [1 , 2 , 3 , 4 , 5, 6 ,7, 8, 9 ]
for (const num of arr) {
//    console.log(num);
   
}

const books = ["eng" , "urdu" , "math"]
for (const page of books) {
    // console.log(page);
}
//+++++maps unique values in map/ no dublicate values
const map = new Map()
map.set(`pak` , "Pakistan")
map.set(`USA` , "United state")
map.set(`Pak` , "Pakistan")
map.set(`Pak` , "Pakistan")

// console.log(map);
// for (const [val , value ] of map) {
//     // console.log(value);
//     // console.log( val , ':-' ,value);
// }

//+++++++++for in loop
const book = ["eng" , "urdu" , "math"]
//page is like variable and the book is value 
for (const page in book) {
    // console.log(page);
    // console.log( page , ':-' , book);x
    // console.log(book[page]);
}

/// for in loops use for objects and for of loops use for arrays

//++++++for each loop
const coding = ["js" , "php" ,"c" ," c++" , "python"]
// coding.forEach (function name() {}) dont write function name in for each loop because here using call  back
// coding.forEach( function (language) {
// console.log(language);

// })
// we can also  use arrow function
// coding.forEach ( (anyname) => {
//     console.log(anyname);
// })

// coding.forEach ( (anyname  ,index , arr) => {
//     console.log(anyname , index , arr);
// })
//array in objects`
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    // console.log(item.languageName);
} )
///////////////++++++++++++ for each loop dont return value

// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )
//agr scope mein likhna mtlb {} mein to return likhna pry ga or agr scope mein ni brackets mein ni to direct num >4 aik hi line mein likh den 


// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )


const bookss = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = bookss.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);
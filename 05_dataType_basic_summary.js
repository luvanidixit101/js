// primitive 

// 7 types

// String
// Number
// Boolean
// null
// undefined
// Symbol
// BigInt

const score = 300
const score1 = 1003.3

const isLoggedIn =false;
const scoreValue =null;

const id =Symbol('123')
const anoter =Symbol('123')

console.log(id === anoter) // false


const bigNumber = 123456782225n





// Reference type  or non primitive

// Array, Objects, Functions


// array declare 
const heros = ["shaktiman", "nagraj","doga" ]


// object declaretion
let muobj ={
    name: "dixit",
    age: "19",

}

// function  in variable in store
const myfunction =function() {
    
console.log("hello wold");

}


console.log(typeof heros) // object 
console.log(typeof muobj)  // object 
console.log(typeof myfunction)  //output : object function



// =========================


// Stack (primitive), Heap (Non-primitive)

let myYoutubeName = "dixit.com"

let anotherName = myYoutubeName

anotherName="harsh.com"
console.log(myYoutubeName);
console.log(anotherName);


let userOne ={
    email : "username@gamil.com",
    upi : "user@bla"

}

 let userTwo = userOne

 console.log(userOne.email);

userTwo.email = "dixit@google.com"  // heap in original value change

 console.log(userOne.email);
 console.log(userTwo.email);


 // stack is a copy value  provide 
 // heap is a original value provide
 







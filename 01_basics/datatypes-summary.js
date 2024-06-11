//  Primitive

//  7 types: String, Number, Boolean, Null, undefined, symbol, bigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp =  null
let userEmail
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
console.log(userEmail);

const bigNumber = 123456789098765432234n;


// Refernce(Non-Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "udit",
    Age: 22,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber) ;

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

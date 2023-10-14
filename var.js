var a= 6;
var b=545;
console.log(a+b);
let e = 565335675432;
console.log(typeof(e));

let length = 3.5;
let width = 5;
const area = length * width;

console.log(area + " And datatype of area is: "+ typeof(area));

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

let l = 43.00;
let k = 43;
console.log(typeof(l)+" "+typeof(k));

let v = 123e5;    //12300000
let d = 123e-5;   //0.00123
console.log(v + d);

let a=0,b='',c=null;
console.log(typeof a ,typeof b ,typeof c);

function sum( a, b){
    return a+b;
}
console.log(typeof sum);

const arr= [1,2,3,4,5];
const obj = {1:2,2:3,3:4,4:5,5:6};

console.log(typeof arr);

console.log(typeof obj);

console.log(Array.isArray(arr));

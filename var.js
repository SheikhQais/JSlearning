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

function button() {
    document.getElementById('para').innerText="Button Clicked";
    document.getElementById('demo').style.backgroundColor = "violet"; 
}
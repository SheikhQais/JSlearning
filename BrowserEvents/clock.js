let x = new Date();
let d = x.getDate();
let y = x.getFullYear();
let mon = x.getMonth();

let h = x.getHours();
let m = x.getMinutes();
let s = x.getSeconds();

let current = "Date is: "+ d+"/" + mon + "/" + y + " And Time is: "+ h+ ":" + m + ":" + s;

document.querySelector(".container").innerHTML = '<h1>'+current+'</h2>';
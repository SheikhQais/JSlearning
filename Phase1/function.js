//Basic Funtions practice

function toCelcius(farnheit) {
    return (5/9)*(farnheit-32);
}


function area(){
    let len = 17;
    let wid = 15;
    return len * wid;
}

console.log("Area is: " + area());

console.log(len); //you cannot access local variable, declared inside the function, outside the function.
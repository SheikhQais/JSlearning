let x = function(e){
    // alert("Hello World 1!")
    console.log(e);
    console.log(e.target);
    console.log(e.type,e.clientX, e.clientY);
};

let y = function(e){
    // alert("Hello World 2!")
};
let f = document.getElementById("btn");
f.addEventListener('click',x)

if(a== '2'){
    f.removeEventListener('click',x)
}
f.addEventListener('click',y)

// let a = document.getElementById('btn');
// a.onclick = ()=> {
//     alert("Abbey Bhai! ye mujhe ungli kr raha ha")
// }

//  Events handler are handled by HTML attributes like onClick. 
//  onClick is not a function, it is a attribute so don't put () after this like onClick().

// let a = prompt("What is your fav number?");

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

document.getElementById("twitter").addEventListener('click', function(){
    window.location = "https://google.com";
    window.focus();
});


    setInterval(async function(){
        document.querySelector("#circle").classList.toggle(".bulb")
    },300)
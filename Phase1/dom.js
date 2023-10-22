var a = document.querySelector("button");
a.style.backgroundColor = "red";
let flag = 0;
a.addEventListener("click",function(){
    if (flag==0) {
        document.querySelector("#circle").style.backgroundColor = "Yellow";
        a.style.backgroundColor = "green";
        flag =1;
    } else {
        document.querySelector("#circle").style.backgroundColor = "transparent";
        a.style.backgroundColor = "red";
        flag =0;
    }
})

let promise = fetch("https://goweather.herokuapp.com/weather/Ny")
promise.then((value)=>{
    return value.json();
}).then((value2)=>{
    console.log(value2)
});
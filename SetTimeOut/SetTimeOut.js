// const sum = (a,b,c) => {
//  console.log("Yes! i'm running " + (a + b + c))
//  a + b;   
// }

// setTimeout(sum,5000,1,2,7);


// const sec = prompt("Enter the Seconds");
// let ss = sec%60;
// let mm = sec/60;
// console.log(ss,mm);


setTimeout(function() {
    let a = 0;
    let b = 60;
    document.getElementById("box-1").innerHTML = a;
  
    const interval = setInterval(() => {
      if (b > 0) {
        document.getElementById("box-2").innerHTML = b;
        b = b - 1;
      } else if(b=0){
        
        document.getElementsByClassName("container").innerHTML = "<h1>TIME UP!!!</h1>";
      } 
      else {
        clearInterval(interval);
      }
    }, 1000);
  }, 1000);
  
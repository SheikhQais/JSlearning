// Practicing Promise function 
//  Promise is a third party function like AJAX

var ans = new Promise((res, rej) => {
    let num = Math.floor(Math.random() * 10);
        if (num < 5){
            return res();
        } else {
            return rej();
        }
})

ans.then(function (){
    console.log('below');
}).catch(function (){
    console.log('above');
})

 
    // i'm showing you k aap kis tarah se Asynchronous code ko Synchronously perform kr sakty ho
    
    /*  This is jsut like backend, k jb ek button click hoga tou konsa page load hoga phir
      us page k baad konsa page load hoaga

    */  

    var p1 = new Promise((res, rej) => {
        return res("Pehla Darwaza Kholo");
        
    })

    var p2 = p1.then(function (data){
        console.log(data);
        return new Promise((res,rej)=>{
            return res('phir khud khana bnao');
        })
    });

    var p3 = p2.then(function (data){
        console.log(data);
        return new Promise((res,rej)=>{
            return res('phir Kha lo');
        })
    });

    p3.then(function(data){
        console.log(data);
    })
let p1 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res('After 10 sec');
    },10000)
})

let p2 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res('After 2 sec');
        // rej(new Error('error agya'))
    },2000)
})

let p3 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res('After 3 sec');
    },3000)
})

// p1.then((value)=>{
//     console.log(value); // Onload Show After 1 seconds
// })

// p2.then((value)=>{
//     console.log(value); // Onload Show After 2 seconds
// })

// p3.then((value)=>{
//     console.log(value); // Onload Show After 3 seconds
// })

// let promise_all = Promise.all([p1,p2,p3])
let promise_all = Promise.allSettled([p1,p2,p3])
// let promise_all = Promise.race([p1,p2,p3])
// let promise_all = Promise.any([p1,p2,p3])
// let promise_all = Promise.resolve([p1,p2,p3])
// let promise_all = Promise.reject([p1,p2,p3])

promise_all.then((value)=>{
    console.log(value)
})
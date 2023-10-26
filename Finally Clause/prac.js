// Practice Problem # 1

// const loadscript = async (src) => {
//     return new Promise((res, rej) => {
//         let script = document.createElement('script');
//         script.src = src;
//         script.onload = () => {
//             res(src);
//         };
//         document.head.append(script);
//     });
// }

// const main2 = async () => {
//     console.log(new Date().getTime());
//     let a = await loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js');
//     console.log(a);
//     console.log(new Date().getMilliseconds());
// }

// main2();

// Practice Problem # 2

let p1 = async ()=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(10)
        },3000)
    })
}

let p2 = async ()=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(20)
        },2000)
    })
}

let p3 = async ()=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(30)
        },1000)
    })
}

const load1 = async ()=>{
    // let a1 =await p1()
    // let a2 =await p2()    Every single promise is taking it's own time
    // let a3 =await p3()    So collective time is 6 seconds

    let a1 = p1()
    let a2 = p2()
    let a3 = p3()
    console.timeLog()
    let collect = await Promise.all([a1,a2,a3]) //Here promises are scheduled and collectively take time to complete
    console.log(a1, a2 , a3)                    // is the promise with maximum time which is p1, with 3 seconds
    console.timeEnd()
}
load1();
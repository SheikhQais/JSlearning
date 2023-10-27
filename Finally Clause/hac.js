let p1 = async ()=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log('inializing hacking program....')
            res()
        },1000)
    })
}

let p2 = async ()=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log('fetching your passwords....')
            res()
        },3000)
    })
}

let p3 = async ()=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log('connecting to facebook.....')
            res()
        },6000)
    })
}

let hack = async ()=>{
    await p1()
    await p2()
    await p3()
    setTimeout(()=>{console.log('Your mobile phone is hacked')},2000)
}
hack()
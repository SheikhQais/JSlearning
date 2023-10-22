async function harry(){
    let dehli = new Promise((res,rej)=>{
        setTimeout(()=>{
            res('21 Deg')
        },5000)
    })

    let banglorow = new Promise((res,rej)=>{
        setTimeout(()=>{
            res('27 Deg')
        },10000)
    })
    // dehli.then(alert)
    // banglorow.then(alert)
    console.log("Dehli weather data is fetching please wait")
    let DW = await dehli
    console.log("Dehli weather data is fetched "+ dehli)
    console.log("Bangloro weather data is fetching please wait")
    let Bw = await banglorow
    console.log("Bangloro weather data is fetched "+banglorow)
    return [DW,Bw]
}

async function cherry(){
    let dehli = new Promise((res,rej)=>{
        setTimeout(()=>{
            res('30 Deg')
        },5000)
    })

    let banglorow = new Promise((res,rej)=>{
        setTimeout(()=>{
            res('45 Deg')
        },10000)
    })
    // dehli.then(alert)
    // banglorow.then(alert)
    console.log("Lahore weather data is fetching please wait")
    let DW = await dehli
    console.log("Lahore weather data is fetched "+ dehli)
    console.log("Karachi weather data is fetching please wait")
    let Bw = await banglorow
    console.log("Karachi weather data is fetched "+banglorow)
    return [DW,Bw]
}

const berry = ()=>{
    console.log("hey i, berry and i'm writing")
}

let main1 = async ()=>{
console.log('welcome to weather forecast')
let a = await harry()
berry()
let b = await cherry()
console.log(a)
console.log(b)
}
main1();
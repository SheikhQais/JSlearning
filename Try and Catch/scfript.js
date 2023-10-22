setTimeout(()=>{
    console.log('set time 1')
},1000)

try {
    setTimeout(()=>{
        console.log(Ans)  //This will give error bcs this is Async code and try catch only deals with synchronously
    },2000)
} catch (error) {
    console.log('ohoo error agya')
}

setTimeout(()=>{
    console.log('set time 3')
},3000)

setTimeout(()=>{
    console.log('set time 4')
},4000)

let f = ()=>{
try{
    let a=0;
    // console.log(program) this line has error
    console.log('Hello World')
    return              // Even if you return inside function, finally clause block will always run
} catch(err){
    console.log('There is an error')
}finally{
    console.log("I'm a Good Boy")
}
}

f();
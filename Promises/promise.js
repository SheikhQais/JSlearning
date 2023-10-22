// let promise = new Promise(function (res,rej){
//     console.log('hello world')
//     res(56);
// })

// console.log('Hello One')
// setTimeout(function(){
//     console.log('Hello in 2 sec')
// },2000)

// console.log('My name is '+'Hello World 3')
// console.log(promise);


// Function to simulate fetching data with a Promise

function fetchData(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            const succ = Math.random() < 0.8;
            if(succ){
                res("Data fetched Successfully")
            }
            else{
                rej("Error fetching data")
            }
        },2000)
    })
}

fetchData()
.then((res) => {
    console.log('Success: ' + res);
})
.catch((error) => {
    console.log('Error: ' + error);
});
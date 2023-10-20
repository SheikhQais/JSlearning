// Defining a function in which CallBack function is passing as an argument
function filterArray(numbers,callback){
    const filtered= [];
    for (const num of numbers) {
        if (callback(num)) {
            filtered.push(num);
        }
    }
    console.log(filtered);
}

// Defining Callback Function
function evenNum(number){
    if(number%2==0){
        return number;
    }
}

const Numbers = [10,11,12,13,14,15,16,18,45,46,47,44,46,42];
const fillter = [];
filterArray(Numbers,evenNum);
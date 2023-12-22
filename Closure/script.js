// function init(){
//     let name = "Godzilla"
//     function funki(){
//         console.log("Hey! "+name)   //This will display Tudra
//     }
//     name = "Tundra"
//     return funki;
// }
// let c = init()
// c();

function ret(){
    let a = 1;
    console.log(a)
    let y = ()=>{
        // a++
        console.log(a)
        let z = ()=>{
            // a++
            console.log(a)
        }
        z()
    }
    return y
    a = 414
    console.log(a)
}
let s = ret()
s();
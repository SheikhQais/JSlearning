function init(){
    let name = "Godzilla"
    function funki(){
        console.log("Hey! "+name)   //This will display Tudra
    }
    name = "Tundra"
    return funki;
}
let c = init()
c();
const Honda = [
    faizan= {
        name: "civic",
        make: "2023",
        variant: "Nat",
        engine: "2000cc"
    },
    ahmad = {
        name: "Vezel",
        make: "2020",
        variant: "Hyb",
        engine: "1600cc"
    },
    ali = {
        name: "Accord",
        make: "2023",
        variant: "Turbo",
        engine: "1800cc"
    }
]

// console.log(Honda[1]);

for(i=0; i<Honda.length; i++){
    if (Honda[i]==ahmad) {
        console.log(Honda[i]);
    }
    else{
        console.log(Honda[i]);
    }
}
Honda.splice(1,2);
console.log("After Splice, Array is: ");
console.log(Honda);

for(i=1; i<=10; i++){
    Honda.push(i);
}
console.log("After pushing new element to end of array: ");
console.log(Honda);

for(i=1; i<=10; i++){
    Honda.pop();
}
console.log("After poping new element to end of array: ");
console.log(Honda);

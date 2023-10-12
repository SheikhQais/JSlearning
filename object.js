const car = {
            name: "honda",
            model: "2023",
            variant: "X"
        };

console.log("Name is: " + car.name +", Model is: " + car.model + " And Variant is: " + car.variant);

const person = {
    firstName: "Mohammad",
    secondName: "Ans",
    fullname(){
        console.log(this.firstName + " " + this.secondName); // In a function definition, this refers to the "owner" of the function.
    }
};

person.fullname();
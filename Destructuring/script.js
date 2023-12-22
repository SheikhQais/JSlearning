// Basic array destructuring
const colors = ['red', 'green', 'blue'];
const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor);  // Output: 'red'
console.log(secondColor); // Output: 'green'
console.log(thirdColor);  // Output: 'blue'

{
// Basic object destructuring
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
  const { name, age, city } = person;
  
  console.log(name);  // Output: 'John'
  console.log(age);   // Output: 30
  console.log(city);  // Output: 'New York'
}
console.log(document.cookie)
document.cookie = 'name=harry';
document.cookie = 'id=bitf19m041';
document.cookie = 'name=qais';

let key = prompt('Enter your key:')
let value = prompt('Enter your value:')

document.cookie = '${encodeURIComponent(key)}=${encodeURIComponent(value)}'
console.log(document.cookie)
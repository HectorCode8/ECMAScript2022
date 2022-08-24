// arrays destructuring

let fruits = ['apple', 'banana', 'orange']
let [a, b] = fruits
console.log(a, fruits[2])


// objects destructuring
let person = {username: 'Hector', age: 29, country: 'MX'}
let {username, age, country} = person
console.log(username, age, country)
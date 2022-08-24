// // arrays destructuring

// let fruits = ['apple', 'banana', 'orange']
// let [a, b] = fruits
// console.log(a, fruits[2])


// // objects destructuring
// let person = {username: 'Hector', age: 29, country: 'MX'}
// let {username, age, country} = person
// console.log(username, age, country)

// Spread operator

let person1 = {name: 'John', age: 30}
let country = 'US'
let data = {...person1, country}
console.log(data)

// rest

function sum(num, ...values) {
    console.log(values)
    console.log(num + values[0])
    return num + values[0]
}

sum(1, 1, 2, 3,)


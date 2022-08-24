function newUser(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country)
}

newUser()
newUser('Hector', 29, 'MX')

// es6
function newAdmin(name = 'Hector2', age = 29, country = 'MX') {
    console.log(name, age, country)
}

newAdmin()
newAdmin('Hector3', 29, 'CO')
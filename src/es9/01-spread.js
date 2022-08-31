const user = {username: 'hhh', age: 20, country: 'MX'};
const {username, ...values} = user;
console.log(values);
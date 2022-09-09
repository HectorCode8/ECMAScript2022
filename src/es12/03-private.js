//private
class user {
  //constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //method
  speak() {
    return "Hello bitch";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  get uAge() {
    return this.age
  }
  set uAge(n) {
    this.age = n;
  }
}


const bebeloper1 = new user('Hector', 15)
console.log(bebeloper1.uAge)
console.log(bebeloper1.uAge = 20)




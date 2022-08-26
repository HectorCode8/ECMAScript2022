class User {
  // metodos
  greeting() {
    return "Hello Kunfu Panda";
  }

  greeting2() {
    return "Hello Kunfu Panda Te Saluda Horus";
  }
}

// const hhh = new User();
// console.log(hhh.greeting());
const horus = new User();
console.log(horus.greeting2());

// constructor

class User {
  // Constructor
  constructor() {
    console.log("Nuevo Usuario");
  }
  greeting() {
    return "Hello Kunfu Panda";
  }
}

const newhhh = new User();

// this

class User {
  constructor(name) {
    this.name = name;
  }
  // metodos
  speak() {
    return "Hello Perra";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}

const perra = new User("Alondra");
console.log(perra.greeting());

// setters y getters

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // metodos
  speak() {
    return "Hello Perra";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  get uAge() {
    return this.age;
  }
  set uAge(n) {
    this.age = n;
  }
}

const bebeloper = new User('Bebe', 20);
console.log(bebeloper.uAge);
bebeloper.uAge = 30;
console.log(bebeloper.uAge);

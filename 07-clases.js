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
    return "Hello Perro";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}


const hector = new User('Hector');
console.log(hector.greeting());
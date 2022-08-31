function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it  = iterate(['hector', 'juan', 'pedro', 'ulises', 'victor']);
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)

// flat
const arr = [1, 2, 3, 4, [1, 2, 3, 4, [1, 2, 3, 4]]];
console.log(arr.flat(3));

// flatmap
const arr2 = [1, 2, 3, 4, 5];
console.log(arr2.flatMap(value => [value, value * 2]))

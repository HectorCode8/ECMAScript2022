const fnAsync = () => {
  return new Promise((res, rej) => {
    true ? setTimeout(() => res("Async"), 5000) : rej(new Error("Async error"));
  });
};

const anotherFn = async () => {
    const result = await fnAsync();
    console.log(result);
    console.log('hola')
}

console.log('Before')
anotherFn()
console.log('After')
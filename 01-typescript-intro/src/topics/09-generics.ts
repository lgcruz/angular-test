export function whatsMyType<T>(argument: T): T {
  return argument;
}

let amIString = whatsMyType<string>("Hola mundo");
let amINumber = whatsMyType<number>(100);

console.log(amIString.split(" "));
console.log(amINumber.toFixed());

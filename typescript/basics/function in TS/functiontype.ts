type Calculate = (a: number, b: number) => number; //prototype

const add: Calculate = (a, b) => a + b;
const diff: Calculate = (a, b) => a - b;
const mult: Calculate = (a, b) => a * b;

//use-case
//When multiple functions have the same signature, we can define a function type alias (a "short name") using type or interface.
//This lets us reuse the signature, keep code cleaner, and enforce consistency when defining or passing functions.
/*
conclude saying that functions having similar signature we can define some short name
so that when we want the same signature it is enough to use the short name and you can
start defining the function
*/
type Transformer1 = (input: string) => string;


const toUpper: Transformer1 = (str) => str.toUpperCase();
const addDash: Transformer1 = (str) => `-${str}-`;
console.log(toUpper("sdf"))
console.log(addDash("fggg"))






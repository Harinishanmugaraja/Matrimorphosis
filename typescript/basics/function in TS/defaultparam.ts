//function with default params
function greet(msg: string, name: string = "guest"): string {
  return `${msg} !!!! ${name}`;
}
//welcome guest
//welcome sudha

console.log(greet("welcome")); // "Alice is 25 years old."
console.log(greet("welcome", "sudha")); // "Bob is 30 years old."

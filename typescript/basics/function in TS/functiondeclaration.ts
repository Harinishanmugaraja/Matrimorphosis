//function declaration
function echo(uname: string): string {
  return `Hello, ${uname}!`;
}
let msg = echo("Alice"); // ✅ Correct
console.log(msg); // "Hello, Alice!"

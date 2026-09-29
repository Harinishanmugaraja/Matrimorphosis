//optional params
function greeting(name: string, title?: string): string {
  //0 or 1 value
  if (title) return `Welcome ${title}.${name} `;
  else return `Welcome ${name} `;
}

console.log(greeting("Sudha", "Ms")); // "Alice doesn't want to disclose their age."
console.log(greeting("Charles"));

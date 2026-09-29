// 5. union (Multiple Possible Types)
/*let value: string | number;
value = "Hello"; // ✅ Allowed
value = 100; // ✅ Allowed
//value = true; // ❌ Error
console.log(value);
*/

//To be explored by the students
// 6. intersection (& - Combine Types)
/*
type Person = { name: string };
type Employee = { company: string };
type JobType = Person & Employee;


let worker: JobType = { name: "Alice", company: "Tech Corp" };
console.log(worker)
*/
// 7. literal (Fixed Values)
//analogy: Literal types are like traffic signals for your code
// — even if you’re a great driver, the signals prevent others (and future you) from making costly mistakes.
let statusFlag: "success" | "error" | "loading";
statusFlag = "success"; // ✅ Allowed
console.log(statusFlag);
statusFlag = "error";
//statusFlag = "failed"; // ❌ Error
console.log(statusFlag);

// 8. tuple (Fixed-Length Array)

let person: [string, number] = ["Alice", 25];
person = ["yy", 90];
//person = ["xx", 78,89]; //error
console.log(person);

// 9. enum (Named Constants)

enum Direction {
  Up,
  Down,
  Left,
  Right,
  Uturn,
}
let move: Direction = Direction.Up;
console.log(move); // 0 (Enums default to numbers starting from 0)

//Intersection Types (&) → "Combine Multiple Types"
//An intersection type merges multiple types into one new type.
/*
type Person = { name: string };
type Employee = { company: string };
type EmployeeDetails = Person & Employee;  // ✅ Use a unique name


let empobj: EmployeeDetails = { name: "Alice", company: "Tech Corp" }; // ✅ No conflict
console.log(empobj)
*/

function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Type Assertion
console.log(greeter(user.join(" ") as string));

// Solution 2: Array Destructuring
let [firstName, lastName] = user;
console.log(greeter(firstName + " " + lastName));

//Solution 3:  Overload the function to accept an array
function greeter(person: string): string;
function greeter(person: string[]): string;
function greeter(person: string | string[]): string {
    if (typeof person === 'string') {
        return "Hello, " + person;
    } else {
        return "Hello, " + person.join(" ");
    }
}
console.log(greeter(user));
console.log(greeter("John"));
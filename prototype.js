// Parent object (prototype)
const personProto = {
  greet() {
    console.log("Hello, I am " + this.name);
  },
};

// Create a new object using personProto as its prototype
const person = Object.create(personProto);
person.name = "Alice";

// Check the prototype
console.log(Object.getPrototypeOf(person) === personProto); // ✅ true

// Access method from prototype
person.greet(); // ✅ Hello, I am Alice


let obj={
  name:"xz"
}
let obj3={}
let obj2={}
Object.setPrototypeOf(obj2, obj);
console.log(Object.getPrototypeOf(obj2)===obj)//true
console.log(Object.getPrototypeOf(obj2)===obj3)//false

console.log(obj2.name);



The prototype chain is a core concept in JavaScript’s inheritance model. It allows objects to inherit properties and methods from other objects. When you try to access a property or method on an object, JavaScript first looks for it on that object itself. If it’s not found, the engine looks up the object's internal [[Prototype]] reference (accessible via Object.getPrototypeOf(obj) or the deprecated __proto__ property) and continues searching up the chain until it finds the property or reaches the end (usually null).

For objects created via constructor functions, the prototype chain starts with the instance, then refers to the constructor’s .prototype object, and continues from there. For example:

function Person() {}
const person1 = new Person();

console.log(Object.getPrototypeOf(person1) === Person.prototype); // true
This mechanism allows for property and method sharing among objects, enabling code reuse and a form of inheritance.

Summary:

The prototype chain enables inheritance in JavaScript.
If a property isn’t found on an object, JavaScript looks up its prototype chain.
The prototype of an object instance can be accessed with Object.getPrototypeOf(obj) or __proto__.
The prototype of a constructor function is available via Constructor.prototype.
The chain ends when the prototype is null.
The prototype chain among objects appears as below,



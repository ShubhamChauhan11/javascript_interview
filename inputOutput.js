//one

function foo() {
  let x = (y = 0);
  x++;
  y++;
  return x;
}

console.log(foo(), typeof x, typeof y);
// 1: 1, undefined and undefined
// 2: ReferenceError: X is not defined
// 3: 1, undefined and number
// 4: 1, number and number
// Answer

// Answer: 3
// Of course the return value of foo() is 1 due to the increment operator. But the statement let x = y = 0 declares a local variable x. Whereas y declared as a global variable accidentally. This statement is equivalent to,

// let x;
// window.y = 0;
// x = window.y;
// Since the block scoped variable x is undefined outside of the function, the type will be undefined too. Whereas the global variable y is available outside the function, the value is 0 and type is number.

//one
//two

function foo() {
  return;
  {
    message: "Hello World";
  }
}
// console.log(foo());
// 1: Hello World
// 2: Object {message: "Hello World"}
// 3: Undefined
// 4: SyntaxError
// Answer

// Answer: 3
// This is a semicolon issue. Normally semicolons are optional in JavaScript. So if there are any statements(in this case, return) missing semicolon, it is automatically inserted immediately. Hence, the function returned as undefined.

// Whereas if the opening curly brace is along with the return keyword then the function is going to be returned as expected.
//two

//three

var myChars = ["a", "b", "c", "d"];
delete myChars[0];
console.log(myChars);
console.log(myChars[0]);
console.log(myChars.length);
// 1: [empty, 'b', 'c', 'd'], empty, 3
// 2: [null, 'b', 'c', 'd'], empty, 3
// 3: [empty, 'b', 'c', 'd'], undefined, 4
// 4: [null, 'b', 'c', 'd'], undefined, 4
// Answer

// Answer: 3
// The delete operator will delete the object property but it will not reindex the array or change its length. So the number or elements or length of the array won't be changed. If you try to print myChars then you can observe that it doesn't set an undefined value, rather the property is removed from the array. The newer versions of Chrome use empty instead of undefined to make the difference a bit clearer.

//three

//four

const obj = {
  prop1: function () {
    return 0;
  },
  prop2() {
    return 1;
  },
  ["prop" + 3]() {
    return 2;
  },
};

console.log(obj.prop1());
console.log(obj.prop2());
console.log(obj.prop3());
// 1: 0, 1, 2
// 2: 0, { return 1 }, 2
// 3: 0, { return 1 }, { return 2 }
// 4: 0, 1, undefined
// Answer

// Answer: 1
// ES6 provides method definitions and property shorthands for objects. So both prop2 and prop3 are treated as regular function values.
//four

//five
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
// 1: true, true
// 2: true, false
// 3: SyntaxError, SyntaxError,
// 4: false, false

//Answer: 2
// The important point is that if the statement contains the same operators(e.g, < or >) then it can be evaluated from left to right. The first statement follows the below order,

// console.log(1 < 2 < 3);
// console.log(true < 3);
// console.log(1 < 3); // True converted as 1 during comparison
// True
// Whereas the second statement follows the below order,

// console.log(3 > 2 > 1);
// console.log(true > 1);
// console.log(1 > 1); // False converted as 0 during comparison
// False
//five

//six

function printNumbers(first, second, first) {
  console.log(first, second, first);
}
printNumbers(1, 2, 3);
// 1: 1, 2, 3
// 2: 3, 2, 3
// 3: SyntaxError: Duplicate parameter name not allowed in this context
// 4: 1, 2, 1
// Answer

// Answer: 2
// In non-strict mode, the regular JavaScript functions allow duplicate named parameters. The above code snippet has duplicate parameters on 1st and 3rd parameters. The value of the first parameter is mapped to the third argument which is passed to the function. Hence, the 3rd argument overrides the first parameter.

// Note: In strict mode, duplicate parameters will throw a Syntax Error.
//six

//seven

const printNumbersArrow = (first, second, first) => {
  console.log(first, second, first);
};
// printNumbersArrow(1, 2, 3);
// 1: 1, 2, 3
// 2: 3, 2, 3
// 3: SyntaxError: Duplicate parameter name not allowed in this context
// 4: 1, 2, 1
// Answer

// Answer: 3
// Unlike regular functions, the arrow functions doesn't not allow duplicate parameters in either strict or non-strict mode. So you can see SyntaxError in the console.
//seven

//eight

const arrowFunc = () => arguments.length;
console.log(arrowFunc(1, 2, 3));
// 1: ReferenceError: arguments is not defined
// 2: 3
// 3: undefined
// 4: null

// Answer: 1
// Arrow functions do not have an arguments, super, this, or new.target bindings. So any reference to arguments variable tries to resolve to a binding in a lexically enclosing environment. In this case, the arguments variable is not defined outside of the arrow function. Hence, you will receive a reference error.

// Where as the normal function provides the number of arguments passed to the function

const func = function () {
  return arguments.length;
};
console.log(func(1, 2, 3));
// But If you still want to use an arrow function then rest operator on arguments provides the expected arguments

const arrowFunc = (...args) => args.length;
console.log(arrowFunc(1, 2, 3));
//eight

//nine
console.log([1, 2] + [3, 4]); // "1,23,4"
console.log([] + {}); // "[object Object]"
console.log({} + []); //  "[object Object]" (in Node)

//nine

//ten
let obj = { a: 1 };
const arr = [obj];

obj.a = 2;
console.log(arr[0].a);
//arr[0]&& obj share same reference so value will be 2

obj = { a: 3 };

console.log(arr[0].a);
//we are reassigning object so a new object is created but the arr[0] stores same old object so value is still 2

//ten

//
console.log([] == ![]); //true
//[] is a truthy value so ![]= false
// [] to string=""
//again a falsy value
//so output is true

//

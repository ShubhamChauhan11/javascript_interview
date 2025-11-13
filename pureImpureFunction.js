//impure function
let total = 0;

function addToTotal(num) {
  total += num; // modifies external state
  return total;
}

console.log(addToTotal(5));
console.log(addToTotal(5)); // result changes based on previous calls

//pure function
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // always 5 (same input → same output)

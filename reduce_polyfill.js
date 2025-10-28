Array.prototype.reducePoly = function (callback, initialValue) {
  const array = this;
  console.log("array", array);

  let acc = initialValue;
  for (let i = 0; i < array.length; i++) {
    acc = callback(acc, array[i], i, array);
  }
  return acc;
};

let arr = [1, 2, 3, 4, 5];
let ans = arr.reducePoly((acc, curr, index) => {
  if (curr % 2 == 0) {
    acc = [...acc, curr];
  }
  return acc;
}, []);
console.log("ans is", ans);

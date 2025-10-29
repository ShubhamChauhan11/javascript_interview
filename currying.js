//normal currying
function curr(a) {
  return function (b) {
    return a + b;
  };
}
let ans = curr(2)(3);
console.log(ans);

//normal currying

//currying with inifinite paramenters
function infiniteCurr(a) {
  return function (b) {
    if (b === undefined) {
      return a;
    } else {
      return infiniteCurr(a + b);
    }
  };
}
let ansnew = infiniteCurr(2)(3)(4)(9)();
console.log("ansnew", ansnew);

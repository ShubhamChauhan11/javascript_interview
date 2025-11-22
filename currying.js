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

//real world examples
let permissions = {
  user: {
    actions: ["read"],
  },
  admin: {
    actions: ["read", "write"],
  },
};
function can(user, action) {
  return permissions[user.role].actions.includes(action);
}
const canRead = can({ role: "user" }, "write");
console.log("canRead", canRead);

//this above can be otimsed as whenever we call can function we always have to pass 2 parameters and also have to get these two parameters
//everywhere we are calling this can function
// with currying a function always remember what was the params passed in its previous call so we can utilise it like below
const curryingCan = (user) => (action) =>
  permissions[user.role].actions.includes(action);
const Can = curryingCan({ role: "admin" });

const canUserWrite = Can("write");
const canUserRead = Can("read");
console.log("user can", canUserWrite, canUserRead);
//now in our whole code we can utilise Can function and we dont need the user object everywhere

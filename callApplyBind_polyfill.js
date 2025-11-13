let obj = {
  name: "shu",

  getName: function (age, area) {
    console.log(this.name, age, area);
  },
};
let obj2 = {
  name: "chauhanyu",
};

Function.prototype.callMethod = function (obj, ...args) {
  obj = thisArg === null || obj === undefined ? globalThis : obj;
  obj.fun = this;
  let value = obj.fun(...args);
  delete obj.fun;
  return value;
};
obj.getName.callMethod(obj2, 22, 33);

Function.prototype.applyMethod = function (obj = {}, args) {
  obj.fun = this;
  let value = obj.fun(...args);
  delete obj.fun;
  return value;
};
obj.getName.applyMethod(obj2, [44, 55]);

Function.prototype.bindMethod = function (obj = {}, ...args) {
  const fun = this;
  return function (...remaining) {
    fun.applyMethod(obj, [...args, ...remaining]);
  };
};
let bindvalue = obj.getName.bindMethod(obj2, 66);
bindvalue(99999);

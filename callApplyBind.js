let obj = {
  name: "shu",

  getName: function (age, area) {
    console.log(this.name, age, area);
  },
};
let obj2 = {
  name: "chauhanyu",
};
obj.getName(4, 7);
obj.getName.call(obj2, 22, 99); // call with comma separatd parameters
obj.getName.apply(obj2, [89, 45]); // apply with parameters in an array
let newfun = obj.getName.bind(obj2, 34, 56); // bind return a new function and take comma separ
newfun();

let measure = {
  width: 200,
  height: 300,
  get area() {
    return this.width * this.height;
  },
  set setVolume(length) {
    this.volume = this.width * this.height * length;
  },
};

console.log("measure", measure.area);
measure.setVolume = 500;
console.log("v", measure.volume);

//getter to get the value
//setter to set the value

//use case:
//set dynamic property to a object say that length is coming from api so we can set the volumne property dynamically after words using setter
//getter use case is we dont want to store the area property so we make a getter of it to calculate area at call;

// Absolutely, yes! 🔥 You can define regular functions inside an object to set or get values — and in fact, that’s the older and still totally valid approach!

// Here’s what that looks like:

const measure = {
  width: 200,

  height: 300,

  // normal method — not a getter
  getArea() {
    return this.width * this.height;
  },

  // normal method — not a setter
  setVolume(length) {
    this.volume = this.width * this.height * length;
  },
};

console.log(measure.getArea()); // ✅ 60000
measure.setVolume(500); // ✅ sets volume dynamically
console.log(measure.volume); // 30000000

// So yes, functions work perfectly fine for getting and setting values.
// The key difference is how you use them:

// Feature	Getter/Setter syntax	Regular function
// Access syntax	obj.prop / obj.prop = value	obj.getProp() / obj.setProp(value)
// Looks like a property	✅ Yes	❌ No
// Auto triggers on access/assignment	✅ Yes	❌ No (you call it manually)
// Useful for validation/computed props	✅ Great choice	✅ Works, but less elegant

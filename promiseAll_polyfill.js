let promise1 = new Promise((resolve, reject) => {
  resolve("first");
});
let promise2 = new Promise((resolve, reject) => {
  resolve("second");
});
let promis3 = new Promise((resolve, reject) => {
  resolve("third");
});

let p = [promise1, promise2, promis3];
const promiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    let result = [];
    let count = 0;
    promises.forEach((p) => {
      Promise.resolve(p)
        .then((res) => {
          result.push(res);
          count++;
          if (count === promises.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
    if (promises.length === 0) {
      resolve([]);
    }
  });
};
promiseAll(p)
  .then((res) => console.log("resolved are", res))
  .catch((err) => console.log(err));

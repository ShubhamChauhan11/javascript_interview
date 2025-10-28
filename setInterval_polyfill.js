function setIntervalPolyfill(fn, delay) {
  function run() {
    fn();
    setTimeout(run, delay);
  }
  setTimeout(run, delay);
}

setIntervalPolyfill(() => {
  console.log("called");
}, 2000);

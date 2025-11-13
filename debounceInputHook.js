const { useState } = require("react");

function useDebounceInput(query, delay) {
  const [value, setValue] = useState("");

  useEffect(() => {
    let handler = setTimeout(() => {
      setValue(query);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [query, delay]);
  return value;
}

//example use
const debouncedQuery = useDebounceInput(query, 600);

useEffect(() => {
  if (debouncedQuery) {
    console.log("Fetch API for:", debouncedQuery);
  }
}, [debouncedQuery]);
//example use

//debounce function   also uses the concept of closure

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

debounce(() => {
  //api call here
}, 500);

//throttling - function run once only x delay seconds

function throttle(fn, delay) {
  let flag = false;
  return function (args) {
    if (!flag) {
      fn.apply(this, args);
      flag = true;
      setTimeout(() => (flag = false), delay);
    }
  };
}

const throttledScroll = throttle(handleScroll, 1000);
window.addEventListener("scroll", throttledScroll);

//example how closure stroe the variable referenc and can modify it any time in future this concept is use in above throttle call
function count() {
  let c = 1;
  return function () {
    console.log(c);
    c += 100;
  };
}
let fn = count();

setInterval(() => {
  fn();
}, 2000);

let retryTried = 0;

async function retry(fn, retryCount, delay) {
  try {
    return await fn();
  } catch (err) {
    if (retryCount > 0) {
      console.log("Retrying in", delay, "ms");
      await new Promise((resolve) => setTimeout(resolve, delay));
      return retry(fn, retryCount - 1, delay);
    } else {
      throw err; // no retries left → rethrow error
    }
  }
}

async function f() {
  if (retryTried < 3) {
    retryTried++;
    console.log("called");
    throw new Error("error");
  } else {
    return "success";
  }
}

let ans = await retry(f, 3, 5000);
console.log("ans", ans);

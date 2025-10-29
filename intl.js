//intl can be used for number formatting
const price = 1234.56;
const formatted = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
}).format(price);
console.log("formatted", formatted);

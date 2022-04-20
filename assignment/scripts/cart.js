console.log("***** Cart Functions *****");
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

const addItem = (item) => {
  basket.push(item);
  return true;
};

const listItems = (items) => {
  for (item of items) {
    console.log(item);
  }
};

const empty = () => {
  basket = [];
  return true;
};

console.log(`Basket is ${basket}`);
console.log("Adding bananas (expect true)", addItem("bananas"));
console.log("Adding apple (expect true)", addItem("apple"));
console.log("Adding grapes (expect true)", addItem("grapes"));
console.log(`Basket is now ${basket}`);
console.log("Emptying basket (expect true)", empty(basket));
console.log(`Basket is now ${basket}`);

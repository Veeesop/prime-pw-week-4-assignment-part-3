console.log("***** Cart Functions *****");
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

const isFull = (basket) => {
  return basket.length >= maxItems ? true : false;
};

const addItem = (item) => {
  if (isFull(basket)) {
    console.log(`Basket is full, could not add ${item}`);
    return false;
  } else {
    basket.push(item);
    return true;
  }
};

const listItems = (items) => {
  if (items.length === 0) {
    return "empty";
  } else {
    for (item of items) {
      console.log(item);
    }
  }
  return true;
};

const empty = () => {
  basket = [];
  return true;
};

console.log(`Basket is ${listItems(basket)}`);
console.log("Adding bananas (expect true)", addItem("bananas"));
console.log("Adding apple (expect true)", addItem("apple"));
console.log("Adding grapes (expect true)", addItem("grapes"));
console.log("Adding brocoli (expect true)", addItem("brocoli"));
console.log("Adding lettuce (expect true)", addItem("lettuce"));
console.log("Adding blue berries (expect false)", addItem("blue berries"));
console.log(`Basket is now ${listItems(basket)}`);
console.log("Emptying basket (expect true)", empty(basket));
console.log(`Basket is now ${listItems(basket)}`);

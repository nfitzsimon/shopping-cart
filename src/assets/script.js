let totalPaid = 0;

/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [];

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

const product1 = {
  name: "Carton of cherries",
  price: 4,
  quantity: 0,
  productId: 0,
  image: "../images/cherry.jpg"
};

const product2 = {
  name: "Bag of oranges",
  price: 10,
  quantity: 0,
  productId: 1,
  image: "../images/orange.jpg"
};

const product3 = {
  name: "Carton of strawberries",
  price: 5,
  quantity: 0,
  productId: 2,
  image: "../images/strawberry.jpg"
};

products.push(product1, product2, product3);

/* Declare an empty array named cart to hold the items in the cart */
let cart = [];

/* Get an item from the cart
*/
function getItemFromCart(productId) {
  return cart.find(item => item.productId === productId);
}

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId) {
  let cartItem = getItemFromCart(productId);;
  if (cartItem) {
    cartItem.quantity++;
  } else {
    const product = products.find(item => item.productId === productId);
    cart.push(product);
    cartItem = getItemFromCart(productId);;
    cartItem.quantity++;
  }
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) {
  const cartItem = getItemFromCart(productId);
  cartItem.quantity++;
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {
  const cartItem = getItemFromCart(productId);;
  cartItem.quantity--;
  if (cartItem.quantity === 0) {
    removeProductFromCart(productId);
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId) {
  const cartItem = getItemFromCart(productId);
  cartItem.quantity = 0;
  const index = cart.indexOf(cartItem);
  if (index !== -1) {
    cart.splice(index, 1);
  }

}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/
function cartTotal() {
  let total = 0;
  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
  });
  return total;
}

/* Create a function called emptyCart that empties the products from the cart */
function emptyCart() {
  cart.forEach(function (item) {
    item.quantity = 0;
  });
  cart.splice(0, cart.length);
}

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/
function pay(amount) {
  let total = cartTotal();
  if (total === 0) {
    // if nothing was owed, all money is returned and nothing is added to totalPaid
    return amount;
  }
  const balance = amount - (total - totalPaid);
  if (balance > 0) {
    // if money is returned, the total is added to totalPaid
    totalPaid = totalPaid + total;
  } else {
    // if money is owed, the amount paid is added to totalPaid
    totalPaid = totalPaid + amount;
  }
  return balance;
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}

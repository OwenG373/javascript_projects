function calculateSubtotal(items){

}

function calculateDiscount(subtotal, discountPercent){

}

function calculateTax(amountAfterDiscount, taxPercent){

}

function createCartSummary(items, discountPercent, taxPercent){

}


 

const cartItems = [
  { name: 'Notebook', price: 10, quantity: 2 },
  { name: 'Pen', price: 2, quantity: 5 },
  { name: 'Bag', price: 30, quantity: 1 },
];
console.log(createCartSummary(cartItems, 10, 5));
console.log(calculateSubtotal(cartItems));
const singleItemCart = [{ name: 'Mouse', price: 25, quantity: 2 }];
console.log(createCartSummary(singleItemCart, 0, 10));
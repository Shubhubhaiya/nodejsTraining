const cart = ['shoes', 'shirt', 'pen'];

// // api invoke
// createOrder(cart); // ---> orderId   //2 sec
// makePayment(orderId); //----> paymentInfo  //10sec
// orderSummary(paymentInfo); //1 sec
// updateWalletBalance();

// const promise = createOrder(cart);

// promise
//   .then((orderId) => makePayment(orderId))
//   .then((paymentInfo) => orderSummary(paymentInfo))
//   .then(() => updateWalletBalance());

// create the promise

function createOrder(cart) {
  // consume the promise
  verifyCart(cart)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Create the promise
function verifyCart(cart) {
  return new Promise((resolve, reject) => {
    if (cart.length > 0) {
      resolve('you can proceed further for payment');
    } else {
      reject('cart should not be empty');
    }
  });
}

createOrder(cart);

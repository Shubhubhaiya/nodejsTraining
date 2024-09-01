const cart = ['shoes', 'shirt', 'pen'];

// api invoke
createOrder(cart); // ---> orderId   //2 sec
makePayment(orderId); //----> paymentInfo  //10sec
orderSummary(paymentInfo); //1 sec
updateWalletBalance();

const promise = createOrder(cart);

promise
  .then((orderId) => makePayment(orderId))
  .then((paymentInfo) => orderSummary(paymentInfo))
  .then(() => updateWalletBalance());

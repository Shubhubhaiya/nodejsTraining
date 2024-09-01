const cart = ['shoes', 'shirt', 'pen'];

// api invoke
createOrder(cart); // ---> orderId   //2 sec
makePayment(orderId); //----> paymentInfo  //10sec
orderSummary(paymentInfo); //1 sec
updateWalletBalance();

// implement with callbacks

createOrder(cart, function (orderId) {
  makePayment(orderId, function (paymentInfo) {
    orderSummary(paymentInfo, function () {
      updateWalletBalance();
    });
  });
});

// two problems
// 1. we are giving control to some other functions to execute callback function.
// So control is not in our hands.

//2. callback hell . it is very difficult to debug this code.

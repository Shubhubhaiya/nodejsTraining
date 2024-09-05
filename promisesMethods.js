const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('promise p1');
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('promise p2');
  }, 500);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('promise p3');
  }, 0);
});

// p1.then((res) => {
//   console.log(res);
// });

// p2.then((res) => {
//   console.log(res);
// });

// p3.then((res) => {
//   console.log(res);
// });

// promise.all (it will fulfill only if all promises are fullfilled if one of the promise is rejected
// then this promise will also rejected)

Promise.all([p1, p2, p3])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => {
    console.log(err);
  });

// it fulfills when all the promises are settled - either fulfilled or rejected
Promise.allSettled([p1, p2, p3])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => {
    console.log(err);
  });

// promise states - fulfilled, pending , rejected

// promise.any

// Return first promise that fulfill. Rejected if none of the promise got fullfill.
Promise.any([p1, p2, p3])
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });

// return fulfill promise if any of first promise will fullfill
// or reject if any of the promise will reject first
Promise.race([p1, p2, p3])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

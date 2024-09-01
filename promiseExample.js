const url = 'https://api.github.com/users/shubhdeepverma';

const promise = fetch(url);

promise
  .then((data) => {
    console.log(promise);
    console.log(data);
  })
  .catch((error) => {
    console.log(promise);
    console.log();
  });

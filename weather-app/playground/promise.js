const somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('hey');
    reject('Cheated');
  }, 2500);
});

somePromise.then((message) => {
  console.log(`Success: ${message}`);
}, (errorMessage) => {
  console.log(`Error: ${errorMessage}`);
});
 // or
 somePromise.then((message) => {
   console.log(`Success: ${message}`);
 }).catch((errorMessage) => {
   console.log(`Error: ${errorMessage}`);
 });

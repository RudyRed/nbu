const asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      }
      reject('Args must be Nums');
    }, 1500)
  })
};

asyncAdd(2 + 3, '7').then(res => {
  console.log(`Results: ${res}`)
  return asyncAdd(res, 33);
}).then(res => {
  console.log(`Results: ${res}`);
}).catch(e => {
  console.log(e);
});

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

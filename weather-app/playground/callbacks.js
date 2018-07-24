const getUser = (id, callback) => {
  const user = {
    id,
    name: 'Bobby',
  };

  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(43, user => {
  console.log(user);
});

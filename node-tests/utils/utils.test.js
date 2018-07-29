const utils = require('./utils');

it('should add two numbers', () => {
  const res = utils.add(33, 11);

  if (res !== 44) {
    throw new Error(`Expected 44 but got ${res}`);
  }
});

it('should square a number', () => {
  const res = utils.square(12);

  if (res !== 144) {
    throw new Error(`Expected 144 but got ${res}`);
  }
});

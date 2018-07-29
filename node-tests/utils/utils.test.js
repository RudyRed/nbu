const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  expect(utils.add(33, 11)).toBe(44).toBeA('number');
});

it('should square a number', () => {
  expect(utils.square(12)).toBe(144).toBeA('number');
});


it('should set firstName and lastName', () => {
  var user = {location: 'Canada', age: 25};
  var res = utils.setName(user, 'Andrew Mead');

  expect(res).toInclude({
    firstName: 'Andrew',
    lastName: 'Mead'
  });
});

// it('should expect some values', () => {
//   // expect(12).toNotBe(12);
//   // expect({name: 'andrew'}).toNotEqual({name: 'Andrew'});
//   // expect([2,3,4]).toExclude(1);
//   expect({
//     name: 'Andrew',
//     age: 25,
//     location: 'Canada'
//   }).toExclude({
//     age: 23
//   })
// });
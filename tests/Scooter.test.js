const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter object', () => {
  test('does something', () => {
    // edit this to be a real test!
    expect(false).toEqual(true);
  }
)
})


describe('scooter methods', () => {
  // tests here!
  test("Should rent out scooter if it has enough charge and is not damaged"),
  scooter0.rent(user);
  expect(scooter0.station).toBe(null)
  expect(scooter0.user).toBe(user)
});
  test("Should return an error if scooter is damaged or needs repair")
  scooter0.charge = 100;
  scooter0.isBroken = false;
  expect(() => {
    scooter0.rent(user)

  }).toThrow("Scooter is low battery and or damaged")
  scooter0.charge = 100;
  scooter0.isBroken = true;
  expect() => {
    scooter0.rent(user)
  }.toThrow("Scooter is low battery and or damaged") {
});

  //dock method
test("Should allow a user to dock the scooter at a station") {
  scooter0.user = user;
  scooter0.dock(station);
  expect(scooter0.station).toBe(station);
  expect(scooter0.user).toBe(null)
});
  //requestRepair method

  //charge method

})

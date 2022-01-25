const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  const getResidents = species.find((element) =>
    element.name === animal).residents.every((element) =>
    element.age >= age);
  return getResidents;
}

module.exports = getAnimalsOlderThan;

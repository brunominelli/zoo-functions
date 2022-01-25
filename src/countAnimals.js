const data = require('../data/zoo_data');

function countAnimals(animal) {
  const { species } = data;

  if (!animal) {
    return species.reduce((accAnimal, currAnimal) => {
      const key = currAnimal.name;
      const value = currAnimal.residents.length;
      const object = accAnimal;
      object[key] = value;
      return object;
    }, {});
  }
  const { residents } = species.find((thisAnimal) => thisAnimal.name === animal.specie);
  if (Object.keys(animal).length === 1) return residents.length;

  return residents.reduce((acc, curr) => (curr.sex === animal.sex ? acc + 1 : acc), 0);
}

module.exports = countAnimals;

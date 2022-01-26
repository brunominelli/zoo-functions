const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employee = data.employees.find((emplooye) => emplooye.id === id);
  const responsibleFor = employee.responsibleFor[0];
  const animals = data.species.find((animal) => animal.id === responsibleFor);
  const oldestAnimal = animals.residents.reduce((acc, curr) => (curr.age > acc.age ? curr : acc));
  return Object.values(oldestAnimal);
}

module.exports = getOldestFromFirstSpecies;

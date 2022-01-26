const data = require('../data/zoo_data');

function getAnimals(animalsId, value) {
  const { species } = data;
  return animalsId.map((id) => {
    const animals = species.find((animal) => animal.id === id);
    if (value === 'species') return animals.name;
    return animals.location;
  });
}

function getCoverage() {
  const { employees } = data;
  return employees.reduce((acc, curr) => {
    const coverage = {
      id: curr.id,
      fullName: `${curr.firstName} ${curr.lastName}`,
      species: getAnimals(curr.responsibleFor, 'species'),
      locations: getAnimals(curr.responsibleFor, 'locations'),
    };
    acc.push(coverage);
    return acc;
  }, []);
}

function getEmployeeCoverage({ name, id }) {
  const coverage = getCoverage();
  const isEmployee = coverage.some((employee) =>
    employee.fullName.includes(name) || employee.id === id);
  if (!isEmployee) throw new Error('Informações inválidas');
  return coverage.find((employee) =>
    employee.fullName.includes(name) || employee.id === id);
}

function getEmployeesCoverage(object) {
  if (!object) return getCoverage();
  if (object.name || object.id) return getEmployeeCoverage(object);
}

module.exports = getEmployeesCoverage;

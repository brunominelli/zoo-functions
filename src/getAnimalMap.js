const data = require('../data/zoo_data');

const { species } = data;

const getLocation = () => species.reduce((acc, curr) => {
  const { name, location } = curr;
  if (!acc[location]) acc[location] = [];
  acc[location].push(name);
  return acc;
}, {});

const getNames = ({ sex, sorted }) => species.reduce((acc, curr) => {
  const { residents, name, location } = curr;
  if (!acc[location]) acc[location] = [];

  const object = {};
  const filter = residents.filter((resident) => resident.sex === sex);
  const list = sex ? filter : residents;
  const names = list.map((item) => item.name);

  object[name] = sorted ? names.sort() : names;
  acc[location].push(object);
  // console.log(acc);
  return acc;
}, {});

function getAnimalMap(options) {
  if (!options || !options.includeNames) return getLocation();
  return getNames(options);
}

module.exports = getAnimalMap;

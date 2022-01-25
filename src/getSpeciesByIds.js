const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (!ids) return [];
  return ids.reduce((arrayIds, speciesId) => {
    arrayIds.push(data.species.find((animalSpecie) => animalSpecie.id === speciesId));
    return arrayIds;
  }, []);
}

module.exports = getSpeciesByIds;

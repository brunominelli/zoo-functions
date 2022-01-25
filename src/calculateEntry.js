const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const object = { adult: 0, child: 0, senior: 0 };
  entrants.forEach((entrant) => {
    if (entrant.age < 18) object.child += 1;
    else if (entrant.age < 50) object.adult += 1;
    else object.senior += 1;
  });
  return object;
}

function calculateEntry(entrants) {
  if (!entrants || !Object.keys(entrants).length) return 0;
  let entries = 0;
  const { prices } = data;
  const totalEntrants = countEntrants(entrants);
  Object.entries(totalEntrants).forEach((entrant) => {
    entries += prices[entrant[0]] * entrant[1];
  });
  return entries;
}

module.exports = { calculateEntry, countEntrants };

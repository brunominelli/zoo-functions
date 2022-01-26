const data = require('../data/zoo_data');

const { species } = data;
const days = Object.keys(data.hours);

function setParameter(scheduleTarget) {
  const isAnimal = species.some((animal) => animal.name === scheduleTarget);
  const isDay = days.some((day) => day === scheduleTarget);
  if (isAnimal) return 'animal';
  if (isDay) return 'day';
  return 'error';
}

function setSchedule() {
  const getDays = Object.entries(data.hours);
  const schedule = getDays.reduce((acc, curr) => {
    const [day, hours] = curr;
    const open = `Open from ${hours.open}am until ${hours.close}pm`;
    const closed = 'The zoo will be closed!';
    acc[day] = {
      officeHour: hours.open > 0 ? open : 'CLOSED',
      exhibition: hours.open > 0 ? [] : closed,
    };
    return acc;
  }, {});

  species.forEach((animal) => {
    animal.availability.forEach((day) => {
      schedule[day].exhibition.push(animal.name);
    });
  });
  return schedule;
}

function getSchedule(scheduleTarget) {
  const parameter = setParameter(scheduleTarget);
  const schedule = setSchedule();
  if (parameter === 'error') return schedule;
  if (parameter === 'day') {
    const object = {};
    object[scheduleTarget] = schedule[scheduleTarget];
    return object;
  }
  if (parameter === 'animal') {
    const target = species.find((animal) => animal.name === scheduleTarget);
    return target.availability;
  }
}

console.log(getSchedule('lions'));

module.exports = getSchedule;

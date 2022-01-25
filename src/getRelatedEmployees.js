const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  const arrayManagersIds = employees
    .reduce(
      (accManagersIds, currManagersIds) => accManagersIds
        .concat(currManagersIds.managers), [],
    );
  return arrayManagersIds.includes(id);
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.reduce((accumulatorEmployee, currentEmployee) => {
    if (currentEmployee.managers.includes(managerId)) {
      accumulatorEmployee.push(`${currentEmployee.firstName} ${currentEmployee.lastName}`);
    }
    return accumulatorEmployee;
  }, []);
}

module.exports = { isManager, getRelatedEmployees };

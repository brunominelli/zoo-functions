const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const { employees } = data;
  return employees.find((employee) => (
    (employee.firstName === employeeName || employee.lastName === employeeName)));
}

console.log(getEmployeeByName());
console.log(getEmployeeByName('Elser'));
module.exports = getEmployeeByName;

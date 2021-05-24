function propertyAdd(object, newKey, newValue) {
  object[newKey] = newValue;
};

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

console.table(customer);

let newPropertyKey = 'lastName';
let lastName = 'Silva';

propertyAdd(customer, newPropertyKey, lastName);

console.table(customer);
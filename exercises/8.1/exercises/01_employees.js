// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada.
// Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id .
// A sua função deve receber como parâmetro o nome completo da pessoa funcionária 
// e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const emailGenerator = (name) => {
  nameSplitted = name.toLowerCase().split(' ');
  let email = '';
  for (let index = 0; index < nameSplitted
    .length; index += 1) {
    if (index === 0) {
      email += nameSplitted[0];
    } else {
      email += '_' + nameSplitted[index];
    };
  };
  email += '@trybe.com';
  return email;
}

const employee = (name) => {
  return {
    name,
    email: emailGenerator(name),
  }
}

const newEmployees = (callback) => {
  return {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  };
};

console.log(newEmployees(employee));
const selectState = document.getElementById('states');
const states = [{name: 'Acre', initials: 'AC',}, {name: 'Alagoas', initials: 'AL',}, {name: 'Amapá', initials: 'AP',}, {name: 'Amazonas', initials: 'AM',}, {name: 'Bahia', initials: 'BA',}, {name: 'Ceará', initials: 'CE',}, {name: 'Espírito Santo', initials: 'ES',}, {name: 'Goiás', initials: 'GO',}, {name: 'Maranhão', initials: 'MA',}, {name: 'Mato Grosso', initials: 'MT',}, {name: 'Mato Grosso do Sul', initials: 'MS',}, {name: 'Minas Gerais', initials: 'MG',}, {name: 'Pará', initials: 'PA',}, {name: 'Paraíba', initials: 'PB',}, {name: 'Paraná', initials: 'PR',}, {name: 'Pernambuco', initials: 'PE',}, {name: 'Piauí', initials: 'PI',}, {name: 'Rio de Janeiro', initials: 'RJ',}, {name: 'Rio Grande do Norte', initials: 'RN',}, {name: 'Rio Grande do Sul', initials: 'RS',}, {name: 'Rondônia', initials: 'RO',}, {name: 'Roraima', initials: 'RR',}, {name: 'Santa Catarina', initials: 'SC',}, {name: 'São Paulo', initials: 'SP',}, {name: 'Sergipe', initials: 'SE',}, {name: 'Tocantins', initials: 'TO',}, {name: 'Distrito Federal', initials: 'DF',}];
const btnSubmit = document.querySelector('#btn-submit');
const body = document.querySelector('body');
const script = document.querySelector('script');

const nameInputBox = document.querySelector('#name');
const emailInputBox = document.querySelector('#email');
const cpfInputBox = document.querySelector('#cpf');
const addressInputBox = document.querySelector('#address');
const cityInputBox = document.querySelector('#city');
const stateInput = document.querySelector('#states');
const houseTypeInput = document.getElementsByName('house-type');
const abstractInputBox = document.querySelector('#abstract');
const jobInputBox = document.querySelector('#job');
const descriptionInputBox = document.querySelector('#job-description');
const dateInputBox = document.querySelector('#date');

function createState(stateData) {
  const stateElement = document.createElement('option');
  stateElement.innerText = stateData.name;
  stateElement.setAttribute('value', stateData.initials);
  return stateElement;
}

function addStateElements(statesDataList) {
  for (let state of statesDataList) {
    selectState.appendChild(createState(state));
  };
}

function dateChecker() {
  let dateString = dateInputBox.value.split('/');
  let dateNumber = [];
  for (let number of dateString) {
    dateNumber.push(parseInt(number, 10));
  }
  if (((dateString[0] < 0) || (dateString[0] > 31))) {
    alert('Formato inválido dd/mm/aaaa !');
  } else if ((dateNumber[0] < 0) || (dateNumber[0] > 31)) {
    alert('Dia inválido !');
  } else if ((dateNumber[1] < 0) || (dateNumber[1] > 12)) {
    alert('Mês inválido !');
  } else if ((dateNumber[2] < 0)) {
    alert('Ano inválido !');
  };
}

function nameChecker() {
  if (nameInputBox.value.length === 0 || nameInputBox.value.length > 40) {
    return false;
  };
  return true;
}

function emailChecker() {
  const emailLength = email.value.length;
  let haveAt = 0;
  if (emailLength !== 0 && emailLength <= 50) {
    for (let char of emailInputBox.value) {
      if (char === '@') {
        haveAt += 1;
      };
    };
    if (haveAt === 1) {
      return true;
    };
  };
  return false;
}

function cpfChecker() {
  const cpfLength = cpfInputBox.value.length;
  if (cpfLength > 0 && cpfLength <= 11) {
    for (let number of cpfInputBox.value) {
      if (isNaN(parseInt(number, 10))) {
       return false;
      };
    };
    return true;
  };
  return false;
}

function addressChecker() {
  const addressLength = addressInputBox.value.length;
  if (addressLength > 0 && addressLength <= 200) {
    return true;
  };
  return false;
}

function cityChecker() {
  const cityLength = cityInputBox.value.length;
  if (cityLength > 0 && cityLength <= 28) {
    for (let letter of cityInputBox.value) {
      if (!isNaN(parseInt(letter, 10))) {
        return false;
      };
    };
    return true;
  };
  return false;
}

function stateConverter() {
  for(state of states) {
    if (state.initials === stateInput.value) {
      return state.name;
    };
  };
}

function findCheckedOption() {
  for (let option of houseTypeInput) {
    console.log(option, option.checked);
    if (option.checked) {
      switch(option.value) {
        case 'house':
          return 'Casa';
        case 'apartment':
          return 'Apartamento';
      };
    };
  };
}

function formValidation(event) {
  event.preventDefault();
  const div = document.createElement('div');
  if (nameChecker()) {
    if (emailChecker()) {
      if (cpfChecker()) {
        if (addressChecker()) {
          if (cityChecker()) {
            div.innerHTML = `<p>Nome: ${nameInputBox.value}</p>
            <p>Email: ${emailInputBox.value}</p>
            <p>CPF: ${cpfInputBox.value}</p>
            <p>Endereço: ${addressInputBox.value}</p>
            <p>Cidade: ${cityInputBox.value}</p>
            <p>Estado: ${stateConverter()}</p>
            <p>Tipo residêcia: ${findCheckedOption()}</p>`;
          } else {
            div.innerHTML = '<h1>Cidade inválida</h1>';
          }
        } else {
          div.innerHTML = '<h1>Endereço inválido</h1>'
        }
      } else {
        div.innerHTML = '<h1>CPF inválido</h1>';
      }
    } else {
      div.innerHTML = '<h1>Email inválido</h1>'
    }
  } else {
    div.innerHTML = '<h1>Nome Inválido</h1>'
  }

  body.insertBefore(div, script);
}

addStateElements(states);
// btnSubmit.addEventListener('click', dateCheck);
btnSubmit.addEventListener('click', formValidation);

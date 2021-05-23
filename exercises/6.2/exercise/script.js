const selectState = document.getElementById('states');
const states = [{name: 'Acre', initials: 'AC',}, {name: 'Alagoas', initials: 'AL',}, {name: 'Amapá', initials: 'AP',}, {name: 'Amazonas', initials: 'AM',}, {name: 'Bahia', initials: 'BA',}, {name: 'Ceará', initials: 'CE',}, {name: 'Espírito Santo', initials: 'ES',}, {name: 'Goiás', initials: 'GO',}, {name: 'Maranhão', initials: 'MA',}, {name: 'Mato Grosso', initials: 'MT',}, {name: 'Mato Grosso do Sul', initials: 'MS',}, {name: 'Minas Gerais', initials: 'MG',}, {name: 'Pará', initials: 'PA',}, {name: 'Paraíba', initials: 'PB',}, {name: 'Paraná', initials: 'PR',}, {name: 'Pernambuco', initials: 'PE',}, {name: 'Piauí', initials: 'PI',}, {name: 'Rio de Janeiro', initials: 'RJ',}, {name: 'Rio Grande do Norte', initials: 'RN',}, {name: 'Rio Grande do Sul', initials: 'RS',}, {name: 'Rondônia', initials: 'RO',}, {name: 'Roraima', initials: 'RR',}, {name: 'Santa Catarina', initials: 'SC',}, {name: 'São Paulo', initials: 'SP',}, {name: 'Sergipe', initials: 'SE',}, {name: 'Tocantins', initials: 'TO',}, {name: 'Distrito Federal', initials: 'DF',}];
const btnSubmit = document.querySelector('#btn-submit');
const btnClear = document.querySelector('#btn-clear');
const body = document.querySelector('body');
const script = document.querySelector('script');

const form = document.querySelector('form');
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

const picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'DD/MM/YYYY',
  position: 'bottom left',
  reposition: false,
  yearRange: [1900, 2021],
  minDate: new Date(1900, 0, 01),
  maxDate: new Date(2021, 12, 31),
  i18n: {
    previousMonth: 'Mês anterior',
    nextMonth: 'Próximo mês',
    months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    weekdays: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
    weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
  },
  firstDay: 1,
  toString(date, format) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  },
  });

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

new JustValidate('.js-form', {
  rules: {
    name: {
      required: true,
      maxLength: 40,
    },
    email: {
      required: true,
      email: true,
      maxLength: 50,
    },
    cpf: {
      required: true,
      minLength: 11,
      maxLength: 11,
    },
    address: {
      required: true,
      maxLength: 200,
    },
    city: {
      required: true,
      maxLength: 28,
    },
    houseType: {
      required: true,
    },
    abstract: {
      required: true,
      maxLength: 1000,
    },
    job: {
      required: true,
      maxLength: 40,
    },
    description: {
      required: true,
      maxLength: 500,
    },
    date: {
      required: true,
    },
  },
  messages: {
    name: {
      required: 'Insira seu nome',
    },
    email: {
      required: 'Insira seu email',
    },
    cpf: {
      required: 'Insira seu CPF',
      minLength: 'CPF deve conter 11 dígitos',
      maxLength: 'CPF deve conter 11 dígitos',
    },
    address: {
      required: 'Insira seu endereço',
      maxLength: 'Limite de 200 caracteres',
    },
    city: {
      required: 'Insira sua cidade',
      maxLength: 'Limite de 28 caracteres',
    },
    houseType: {
      required: 'Escolha uma opção',
    },
    abstract: {
      required: 'Insira o resumo',
      maxLength: 'Limite de 1000 caracteres',
    },
    job: {
      required: 'Insira o cargo',
      maxLength: 'Limite de 40 caracteres',
    },
    description: {
      required: 'Insira a descrição',
      maxLength: 'Limite de 500 caracteres',
    },
    date: {
      required: 'Insira a data de início',
    },
  },  
})

window.onload = () => {
  addStateElements(states);
}
// btnSubmit.addEventListener('click', dateCheck);
btnSubmit.addEventListener('click', formValidation);
btnClear.addEventListener('click', clear);

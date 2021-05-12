const selectState = document.getElementById('states');

const states = [{name: 'Acre', initials: 'AC',}, {name: 'Alagoas', initials: 'AL',}, {name: 'Amapá', initials: 'AP',}, {name: 'Amazonas', initials: 'AM',}, {name: 'Bahia', initials: 'BA',}, {name: 'Ceará', initials: 'CE',}, {name: 'Espírito Santo', initials: 'ES',}, {name: 'Goiás', initials: 'GO',}, {name: 'Maranhão', initials: 'MA',}, {name: 'Mato Grosso', initials: 'MT',}, {name: 'Mato Grosso do Sul', initials: 'MS',}, {name: 'Minas Gerais', initials: 'MG',}, {name: 'Pará', initials: 'PA',}, {name: 'Paraíba', initials: 'PB',}, {name: 'Paraná', initials: 'PR',}, {name: 'Pernambuco', initials: 'PE',}, {name: 'Piauí', initials: 'PI',}, {name: 'Rio de Janeiro', initials: 'RJ',}, {name: 'Rio Grande do Norte', initials: 'RN',}, {name: 'Rio Grande do Sul', initials: 'RS',}, {name: 'Rondônia', initials: 'RO',}, {name: 'Roraima', initials: 'RR',}, {name: 'Santa Catarina', initials: 'SC',}, {name: 'São Paulo', initials: 'SP',}, {name: 'Sergipe', initials: 'SE',}, {name: 'Tocantins', initials: 'TO',}, {name: 'Distrito Federal', initials: 'DF',}];

function createState(stateData) {
  const stateElement = document.createElement('option');
  stateElement.innerText = stateData.name;
  stateElement.setAttribute('value', stateData.initials);
  return stateElement;
};

function addStateElements(statesDataList) {
  for (let state of statesDataList) {
    selectState.appendChild(createState(state));
  };
};

window.onload = (
  addStateElements(states)
);
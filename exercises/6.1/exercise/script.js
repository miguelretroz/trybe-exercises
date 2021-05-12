const selectState = document.getElementById('states');
const states = [{name: 'Acre', initials: 'AC',}, {name: 'Alagoas', initials: 'AL',}]

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

window.onload(
  addStateElements(states)
);
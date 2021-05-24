const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

function showProperties(object) {
  const keys = Object.keys(object);

  for (const key in keys) {
    console.log(`${keys[key]}, Nível: ${object[keys[key]]}`);
  };
};

console.log('---Estudante 01---');
showProperties(student1);
console.log();

console.log('---Estudante 02---');
showProperties(student2);
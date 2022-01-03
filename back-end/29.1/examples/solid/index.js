// ./index.js

const percentageGradesIntoLetters = ({ name, disciplines }) => ({
  name,
  disciplines: disciplines.map(({ name, grade }) => {
    let letterGrade;

    if (grade >= 0.9) letterGrade = 'A';
    else if (grade >= 0.8) letterGrade = 'B';
    else if (grade >= 0.7) letterGrade = 'C';
    else if (grade >= 0.6) letterGrade = 'D';
    else if (grade >= 0.1) letterGrade = 'E';
    else letterGrade = 'F';

    return { name, grade, letterGrade };
  }),
});

const approvedStudents = ({ disciplines }) =>
  disciplines.every(({ grade }) => grade > 0.7);

const updateAprovalData = ({ name: studentName, disciplines }) => {
  console.log(`A pessoa com nome ${studentName} foi aprovada!`);

  disciplines.map(({ name, letterGrade }) =>
    console.log(`${name}: ${letterGrade}`));
};

function setApproved(students) {
  students
    .map(percentageGradesIntoLetters)
    .filter(approvedStudents)
    .map(updateAprovalData);
}

/* Abaixo temos um exemplo de execução */
const students = [
  {
    name: 'Lee',
    disciplines: [
      { name: 'matemática', grade: 0.8 },
      { name: 'história', grade: 0.6 },
    ],
  },
  {
    name: 'Clementine',
    disciplines: [
      { name: 'matemática', grade: 0.8 },
      { name: 'história', grade: 0.9 },
    ],
  },
];

setApproved(students);

module.exports = {
  percentageGradesIntoLetters,
  approvedStudents,
  updateAprovalData,
  setApproved,
};
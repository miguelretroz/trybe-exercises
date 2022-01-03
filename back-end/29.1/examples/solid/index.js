const GRADE_DICT = {
  0.9: 'A',
  0.8: 'B',
  0.7: 'C',
  0.6: 'D',
  0.1: 'E',
};

const gradeKeys = Object.keys(GRADE_DICT);

const getGradeLetter = (gradeNumber) => {
  let letterGrade = 'F';

  gradeKeys.find((grade) => {
    if (gradeNumber >= grade) {
      letterGrade = GRADE_DICT[grade];
      return true;
    }
    return false;
  });

  return letterGrade;
};

const getLetterGrades = ({ name, grade }) => ({
  name,
  grade,
  letterGrade: getGradeLetter(grade),
});

const percentageGradesIntoLetters = ({ name, disciplines }) => ({
  name,
  disciplines: disciplines.map(getLetterGrades),
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
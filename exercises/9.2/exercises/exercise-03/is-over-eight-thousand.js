const randomNumber = (min, max) => Math.round((min + Math.random() * (max - min)));

const generateArrayOfNumbers = (length, content, min, max) => {
  const array = [];
  for (let index = 0; index < length; index += 1) {
    array.push(content(min, max));
  };
  return array;
};

const isOverEightThousand = () => {
  return new Promise((resolve, reject) => {
    const tenNumbers = generateArrayOfNumbers(10, randomNumber, 1, 50);
    const result = tenNumbers.reduce((accumulator, currentNumber) => accumulator + Math.pow(currentNumber, 2));

    if (result < 8000) {
      const resultDivision = [(result / 2), (result / 3), (result / 5), (result / 10)];
      resolve(resultDivision);
    } else {
      return reject();
    }
  });
};

isOverEightThousand()
  .then(response => console.log(response))
  .catch(() => console.log('Promise rejeitada'));
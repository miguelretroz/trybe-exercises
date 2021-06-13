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
      resolve();
    } else {
      return reject();
    }
  });
};

isOverEightThousand().then(() => console.log('Promise resolvida')).catch(() => console.log('Promise rejeitada'));
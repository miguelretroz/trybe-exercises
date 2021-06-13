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
      const resultDivision = [(Math.round((result / 2))), Math.round((result / 3)), Math.round((result / 5)), Math.round((result / 10))];
      resolve(resultDivision);
    } else {
      return reject('É mais de oito mil! Essa promise deve estar quebrada!');
    }
  });
};

isOverEightThousand()
  .then(response => {
    console.log(response)
    return new Promise((resolve) => {
      const sum = response.reduce((accumulator, currentNumber) => accumulator + currentNumber);
      resolve(sum);
    })
  })
  .then(sum => console.log(sum))
  .catch((error) => console.log(error));
const randomNumber = (min, max) => Math.round((min + Math.random() * (max - min)));

const generateArrayOfNumbers = (length, content, min, max) => {
  const array = [];
  for (let index = 0; index < length; index += 1) {
    array.push(content(min, max));
  };
  return array;
};

const sumListNumber = async (numbers) => {
  const sum = numbers.reduce((accumulator, number) => accumulator + number);
  return sum;
}

const isOverEightThousand = async () => {
  try {
    const tenNumbers = generateArrayOfNumbers(10, randomNumber, 1, 50);
    const result = tenNumbers.reduce((accumulator, currentNumber) => accumulator + Math.pow(currentNumber, 2));

    if (result < 8000) {
      const resultDivision = [(Math.round((result / 2))), Math.round((result / 3)), Math.round((result / 5)), Math.round((result / 10))];
      console.log(resultDivision);
      const sum = await sumListNumber(resultDivision);
      console.log(sum);
    } else {
      throw new Error('É mais de oito mil! Essa promise deve estar quebrada!');
    }
  } catch (error) {
    console.log(error);
  }
};

isOverEightThousand();
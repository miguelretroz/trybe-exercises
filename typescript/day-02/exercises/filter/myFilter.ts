
type CallbackFilter<T> = (value: T, index?: number, array?: Array<T>) => boolean;

function myFilter<T>(array: T[], callback: CallbackFilter<T>): T[] {
  const filteredArray: T[] = [];

  for (let index = 0; index < array.length; index += 1) {
    if (callback(array[index], index, array)) filteredArray.push(array[index]);
  }

  return filteredArray;
};


const numbers = [1, -1, 3, -4, 5, -6];

console.log("Filter Original", numbers.filter((number) => number >= 0));

console.log("\nMy Filter", myFilter<number>(numbers, (number) => number >= 0));

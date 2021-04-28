function wordReverse(word) {
  let reverse = '';

  for (let index = (word.length - 1); index >= 0; index -= 1) {
      reverse += word[index];
  };
  return reverse;
};

function isPalindrome (word) {
    if (word === wordReverse(word)) {
        return true;
    } else {
        return false;
    };
};

console.log(isPalindrome('arara'));
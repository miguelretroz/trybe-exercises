const numberChecker = (number) => {
  if (typeof number !== 'number') return 'o valor dever ser um número';
  if (number > 0) return 'positivo';
  if (number < 0) return 'negativo';
  return 'neutro';
};

module.exports = numberChecker;

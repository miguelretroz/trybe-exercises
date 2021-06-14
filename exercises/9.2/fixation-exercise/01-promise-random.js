const promise = new Promise((resolve, reject) => {
  const random = Math.round((Math.random() * 11));

  if (random <= 5) {
    return reject(console.log(`Que fracasso =( Nosso número foi ${random}`));
  }
  resolve(console.log(`Que sucesso =) Nosso número foi ${random}`));
});
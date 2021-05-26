const awake = () => {
  console.log('Acordando!!');
};

const coffee = () => {
  console.log('Bora tomar café!!');
};

const sleep = () => {
  console.log('Partiu dormir!!');
};

const doingThings = (callBack) => {
  callBack();
};

doingThings(awake);
doingThings(coffee);
doingThings(sleep);
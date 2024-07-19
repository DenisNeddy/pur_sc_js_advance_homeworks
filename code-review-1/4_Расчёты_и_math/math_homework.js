function getRandom(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function convertDice(value) {
  if(typeof value === 'string') {
    return value = Number(value.split('').slice(1).join(''));
  }
  if(typeof value === 'number') {
    return value;
  }
  return;
}

function getRandomDice(dice, fn) {
  const validValues = [4,6,8,10,12,16,20];
  let value = dice;
  if(Array.isArray(value)) {
    for(let el of value) {
      if(!validValues.includes(fn(el))) {
        return `Игральная кость ${el} не подходит для игры. Доступные значения: [d4, d6, d8, d10, d12, d16, d20]`;
      }
    }
    return value.reduce((acc,el) => acc += getRandom(fn(el),1), 0);
  } else {
    return validValues.includes(fn(value)) ? getRandom(fn(value), 1) : `Игральная кость ${dice} не подходит для игры. Доступные значения: [d4, d6, d8, d10, d12, d16, d20]`;
  }
}



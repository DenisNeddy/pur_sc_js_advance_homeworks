function throwDice(diceTypes) {
  const lessValue = 1;
  const higherValue = diceTypes;

  return Math.floor(Math.random() * (higherValue - lessValue + 1) + lessValue);
}
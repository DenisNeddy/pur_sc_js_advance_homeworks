function isAdult(birthday) {
  let now = Date.now();
  let converedBD = new Date(birthday);
  let age = (now - converedBD) / (1000 * 60 * 60 * 24 * 365);

  return Number(age.toFixed(1)) > 18;
}
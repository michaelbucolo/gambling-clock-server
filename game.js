function gamble() {
  return Math.random() < 0.48 ? 1 : 0;
}

function generateResults(count = 60) {
  return Array.from({ length: count }, () => gamble()).join('');
}

module.exports = {
  generateResults
};

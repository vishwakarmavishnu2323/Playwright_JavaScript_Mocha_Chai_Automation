function getRandomEmail() {
  return `user_${Date.now()}@test.com`;
}

module.exports = { getRandomEmail };

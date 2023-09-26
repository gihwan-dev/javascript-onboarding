// 5만원 1만원 5천원 1천원 500원 100원 50원 10원 1원
const MONEY = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money) {
  const result = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < MONEY.length; i++) {
    result[i] = currentCount(money, MONEY[i]);
    money -= MONEY[i] * result[i];
  }
  return result;
}

function currentCount(target, value) {
  let count = 0;
  while (target >= value) {
    target -= value;
    count++;
  }
  return count;
}

problem5(50237);

module.exports = problem5;

function problem1(pobi, crong) {
  var answer;
  // 입력이 올바르지 않은 경우
  if (!validateTotalInput(pobi)) {
    return -1;
  }
  if (!validateTotalInput(crong)) {
    return -1;
  }
  // 입력이 올바른 경우
  // 왼쪽 오른쪽 비교해 큰 값 할당
  //pobi
  const pobiSumMax = Math.max(sum(pobi[0]), sum(pobi[1]));
  const pobiPowerMax = Math.max(power(pobi[0]), power(pobi[1]));
  const pobiMax = Math.max(pobiSumMax, pobiPowerMax);

  //crong
  const crongSumMax = Math.max(sum(crong[0]), sum(crong[1]));
  const crongPowerMax = Math.max(power(crong[0]), power(crong[1]));
  const crongMax = Math.max(crongSumMax, crongPowerMax);

  // 비교 후 결과값 전달
  if (pobiMax > crongMax) {
    return 1;
  }

  if (pobiMax < crongMax) {
    return 2;
  }

  if (pobiMax === crongMax) {
    return 0;
  }

  return -1;
}

module.exports = problem1;

function validateTotalInput(value) {
  try {
    // 입력의 길이는 2여야 한다.
    if (!value.length === 2) {
      return false;
    }
    // Number(value)의 값이 숫자 값이여야 한다.
    value[0] = Number(value[0]);
    value[1] = Number(value[1]);
    if (typeof value[0] !== "number" && typeof value[1] !== "number") {
      return false;
    }
    // 왼쪽은 홀수 오른쪽은 짝수 번호여야 한다.
    if (value[0] % 2 !== 1 && value[1] % 2 !== 0) {
      return false;
    }
    // 오른쪽 값에서 왼쪽을 뺀 값이 1이여야 한다.
    if (value[1] - value[0] !== 1) {
      return false;
    }
    // 시작 면이나 마지막 면이 나오도록 책을 펼치지 않는다.
    // 즉 페이지는 3~398 사이에 존재한다
    if (!value[0] > 1 && value[1] < 400) {
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
}

function sum(value) {
  const target = (value + "").split("");
  const result = target.reduce((prev, cur) => {
    return Number(prev) + Number(cur);
  }, 0);
  return result;
}

function power(value) {
  const target = (value + "").split("");
  const result = target.reduce((prev, cur) => {
    return Number(prev) * Number(cur);
  }, 1);
  return result;
}

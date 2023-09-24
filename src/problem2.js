function problem2(cryptogram) {
  // 입력값 길이가 1 이상 1000 이하인 문자열이다.
  // 입력값은 알파멧 소문자로만 이루어져 있다.
  if (cryptogram === "") {
    return "";
  }

  const transformedCrypto = cryptogram.split("");
  return decodingCrypto(transformedCrypto);
}

module.exports = problem2;

function decodingCrypto(cryptogram) {
  let target = cryptogram;
  let isChanged = true;
  let result = [];
  console.log(target.length);
  while (isChanged) {
    isChanged = false;
    let end = target.length - 1;
    for (let i = 0; i <= end; i++) {
      if (i === 0) {
        result.push(target[0]);
      } else if (result[result.length - 1] === target[i]) {
        isChanged = true;
        result.pop();
        continue;
      } else {
        result.push(target[i]);
      }
    }
    target = result;
    result = [];
  }
  return target.join("");
}

console.log(problem2("browoanoommnaon"));
console.log(problem2("zyelleyz"));

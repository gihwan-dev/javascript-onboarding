const stringArr = "ABCDEFGHIJKLNMOPQRSTUVWXYZ".split("");
const targetMap = {};
for (let i = 0; i < stringArr.length / 2; i++) {
  targetMap[stringArr[i]] = stringArr[stringArr.length - 1 - i];
  targetMap[stringArr[stringArr.length - 1 - i]] = stringArr[i];
  targetMap[stringArr[i].toLowerCase()] =
    stringArr[stringArr.length - 1 - i].toLowerCase();
  targetMap[stringArr[stringArr.length - 1 - i].toLowerCase()] =
    stringArr[i].toLowerCase();
}
function problem4(word) {
  const target = word.split("");
  const result = target.map((item) => {
    return transformChar(item);
  });
  return result.join("");
}

function transformChar(value) {
  if (targetMap[value] === undefined) {
    return value;
  }
  return targetMap[value];
}

module.exports = problem4;

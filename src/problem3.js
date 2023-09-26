function problem3(number) {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    const result = countTarget(String(i).split(""));
    count += result;
  }
  return count;
}

function countTarget(value) {
  let count = 0;
  for (let i = 0; i < value.length; i++) {
    if (value[i] === "3" || value[i] === "6" || value[i] === "9") {
      count++;
    }
  }
  return count;
}

problem3(13);
problem3(33);

module.exports = problem3;

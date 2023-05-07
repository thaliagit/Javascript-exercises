function sumUntil(maxValue) {
  let sum = null;
  for (let i = 1; i <= maxValue; i++){
    sum = sum + i;
  }
  return sum;
}

console.log(sumUntil(5));
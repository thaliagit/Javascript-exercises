function sum(...numbers) {
  let total = 0;
  for(let i =0; i < numbers.length; i++){
    total += numbers[i];
  }
  return total;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));